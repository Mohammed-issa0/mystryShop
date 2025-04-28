"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, doc, query, orderBy, limit, addDoc, serverTimestamp } from "firebase/firestore"
import { CalendarIcon, Search, User, ArrowRight, AlertCircle } from "lucide-react"

// ======== تكوين Firebase ========
const firebaseConfig = {
  apiKey: "AIzaSyCk5SyB5ZBjv2OMJWnDIU1euapWSdRmuhU",
  authDomain: "mystry-e8e8a.firebaseapp.com",
  projectId: "mystry-e8e8a",
  storageBucket: "mystry-e8e8a.firebasestorage.app",
  messagingSenderId: "592198032875",
  appId: "1:592198032875:web:c7bc85e65ca52704b30dae",
}

// تهيئة Firebase
let app
let db
try {
  console.log("بدء تهيئة Firebase...")
  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  console.log("تم تهيئة Firebase بنجاح")
} catch (error) {
  console.error("حدث خطأ أثناء تهيئة Firebase:", error)
  db = {} as any
}

// ======== الأنواع (Types) ========
interface BlogPost {
  id: string
  author: string
  category: string
  content: string
  createdAt: any
  date: string
  excerpt: string
  image: string
  tags: string[]
  title: string
  updatedAt: any
}

// ======== وظائف مساعدة ========
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

// ======== مكونات UI أساسية ========
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick = () => {},
  disabled = false,
  type = "button",
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  }

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const Input = ({ className = "", type = "text", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

const Badge = ({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
}) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

const Alert = ({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode
  variant?: "default" | "destructive"
  className?: string
}) => {
  const variants = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 bg-destructive text-destructive-foreground",
  }

  return (
    <div
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&:has([role=alert])]:-translate-y-2",
        variants[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

const AlertTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <h5 className={cn("mb-1 font-semibold leading-none tracking-tight", className)}>{children}</h5>
}

const AlertDescription = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("text-sm opacity-70", className)}>{children}</div>
}

const Skeleton = ({
  className = "",
}: {
  className?: string
}) => {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} />
}

// ======== بيانات نموذجية ========
const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "sample-1",
    author: "نورا عبد الله",
    category: "تجربة العميل",
    content:
      "<p>الانطباع الأول يلعب دوراً محورياً في تشكيل نظرة العميل نحو علامتك التجارية.</p> <h2>لماذا يعتبر الانطباع الأول مهماً؟</h2> <p>في ثوانٍ معدودة، يكوّن العميل رأياً عن شركتك، مما يؤثر على قراراته المستقبلية.</p> <h2>كيف تترك انطباعاً أولياً إيجابياً؟</h2> <h3>1. الاستقبال الحار</h3> <p>ابدأ كل تفاعل مع العميل بابتسامة وترحيب حار.</p> <h3>2. المظهر الاحترافي</h3> <p>مظهر موظفيك ومكان عملك يعكس احترافيتك وجودة خدماتك.</p> <h3>3. السرعة في تقديم الخدمة</h3> <p>كلما كانت الخدمة أسرع وأكثر كفاءة، زادت إيجابية الانطباع الأول.</p> <h2>الخلاصة</h2> <p>ترك انطباع أول إيجابي مفتاح لبناء علاقات طويلة الأمد مع العملاء وضمان ولائهم المستقبلي.</p>",
    createdAt: new Date(),
    date: "5 أبريل 2023",
    excerpt: "تعرف على تأثير الانطباع الأول على تجربة العميل وكيفية ترك انطباع إيجابي يدوم طويلاً.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["الانطباع الأول", "تجربة العميل", "ولاء العملاء"],
    title: "دور الانطباع الأول في نجاح تجربة العميل",
    updatedAt: new Date(),
  },
  {
    id: "sample-2",
    author: "نورا عبد الله",
    category: "التسويق الذكي",
    content:
      "<p>التسويق الذكي يعتمد على استخدام التكنولوجيا والبيانات لتحسين استراتيجيات التسويق.</p><h2>أهمية التسويق الذكي</h2><p>يساعد التسويق الذكي الشركات على فهم عملائها بشكل أفضل واستهدافهم بدقة أكبر.</p>",
    createdAt: new Date(),
    date: "10 مارس 2023",
    excerpt: "كيف يمكن للشركات الاستفادة من التسويق الذكي لتحسين أدائها وزيادة مبيعاتها.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["التسويق الذكي", "التكنولوجيا", "البيانات"],
    title: "أهمية التسويق الذكي في تحسين تجربة العملاء",
    updatedAt: new Date(),
  },
  {
    id: "sample-3",
    author: "نورا عبد الله",
    category: "تجربة العميل",
    content:
      "<p>تحسين تجربة العميل يعد من أهم عوامل نجاح الأعمال في العصر الحديث.</p><h2>استراتيجيات تحسين تجربة العميل</h2><p>هناك العديد من الاستراتيجيات التي يمكن اتباعها لتحسين تجربة العميل وزيادة رضاه.</p>",
    createdAt: new Date(),
    date: "15 فبراير 2023",
    excerpt: "استراتيجيات فعالة لتحسين تجربة العميل وزيادة ولائه للعلامة التجارية.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["تجربة العميل", "استراتيجيات", "ولاء العملاء"],
    title: "استراتيجيات فعالة لتحسين تجربة العميل",
    updatedAt: new Date(),
  },
]

// ======== مكونات المدونة ========

// مكون بطاقة المقال
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border rounded-lg overflow-hidden bg-card transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={post.image || "/placeholder.svg?height=600&width=1200"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="outline" className="text-xs">
            {post.category}
          </Badge>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
        </div>

        <h3 className="font-bold text-xl line-clamp-2">
          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

        <div className="pt-2">
          <Link href={`/blog/${post.id}`}>
            <Button variant="outline" size="sm">
              اقرأ المزيد
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// مكون شريط البحث
function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}`)
    } else {
      router.push("/")
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث في المدونة..."
          className="pr-10 w-full"
        />
      </div>
      <Button type="submit">بحث</Button>
    </form>
  )
}

// مكون قائمة المقالات
function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q")

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      setError(null)

      try {
        console.log("بدء محاولة الاتصال بـ Firestore...")

        // Set a timeout to detect if Firestore is taking too long
        const timeoutPromise = new Promise<null>((_, reject) => {
          setTimeout(() => reject(new Error("قاعدة البيانات غير متاحة حالياً")), 5000)
        })

        // Actual Firestore fetch
        const fetchPromise = async () => {
          console.log("جاري الاتصال بمجموعة 'blogs'...")
          const postsCollection = collection(db, "blogs")
          console.log("تم إنشاء مرجع المجموعة:", postsCollection)

          const postsQuery = query(postsCollection, orderBy("createdAt", "desc"))
          console.log("تم إنشاء الاستعلام:", postsQuery)

          console.log("جاري تنفيذ الاستعلام...")
          const querySnapshot = await getDocs(postsQuery)
          console.log("تم استلام نتيجة الاستعلام. عدد الوثائق:", querySnapshot.size)

          if (querySnapshot.empty) {
            console.log("لا توجد وثائق في المجموعة 'blogs'")
            return null
          }

          return querySnapshot.docs.map((doc) => {
            console.log("تم العثور على وثيقة بمعرف:", doc.id)
            return {
              id: doc.id,
              ...doc.data(),
            }
          }) as BlogPost[]
        }

        // Race between timeout and fetch
        const result = await Promise.race([fetchPromise(), timeoutPromise])

        if (result === null) {
          // No documents found or timeout occurred, use fallback data
          console.log("استخدام البيانات النموذجية لأن المجموعة فارغة أو حدث مهلة زمنية")
          setUsingFallback(true)
          let filteredPosts = [...FALLBACK_POSTS]

          if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase()
            filteredPosts = filteredPosts.filter(
              (post) =>
                post.title.toLowerCase().includes(lowerQuery) ||
                post.excerpt.toLowerCase().includes(lowerQuery) ||
                post.content.toLowerCase().includes(lowerQuery) ||
                post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
                post.category.toLowerCase().includes(lowerQuery),
            )
          }

          setPosts(filteredPosts)
        } else {
          // We got real data from Firestore
          console.log("تم استلام بيانات حقيقية من Firestore. عدد المقالات:", result.length)
          let fetchedPosts = result

          if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase()
            fetchedPosts = fetchedPosts.filter(
              (post) =>
                post.title.toLowerCase().includes(lowerQuery) ||
                post.excerpt.toLowerCase().includes(lowerQuery) ||
                post.content.toLowerCase().includes(lowerQuery) ||
                post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
                post.category.toLowerCase().includes(lowerQuery),
            )
          }

          setPosts(fetchedPosts)
        }
      } catch (error) {
        console.error("Error fetching posts:", error)
        setError("حدث خطأ أثناء تحميل المقالات. سيتم عرض بيانات نموذجية بدلاً من ذلك.")
        setUsingFallback(true)

        // Use fallback data when there's an error
        let filteredPosts = [...FALLBACK_POSTS]

        if (searchQuery) {
          const lowerQuery = searchQuery.toLowerCase()
          filteredPosts = filteredPosts.filter(
            (post) =>
              post.title.toLowerCase().includes(lowerQuery) ||
              post.excerpt.toLowerCase().includes(lowerQuery) ||
              post.content.toLowerCase().includes(lowerQuery) ||
              post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
              post.category.toLowerCase().includes(lowerQuery),
          )
        }

        setPosts(filteredPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [searchQuery])

  if (loading) {
    return <p className="text-center py-8">جاري تحميل المقالات...</p>
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>تنبيه</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {usingFallback && !error && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>ملاحظة</AlertTitle>
          <AlertDescription>قاعدة البيانات غير متاحة حالياً. يتم عرض بيانات نموذجية.</AlertDescription>
        </Alert>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">لا توجد مقالات</h3>
          {searchQuery && (
            <p className="text-muted-foreground">لم يتم العثور على نتائج مطابقة لـ &quot;{searchQuery}&quot;</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

// مكون التحقق من Firebase
// function FirebaseChecker() {
//   const [status, setStatus] = useState<"checking" | "success" | "error">("checking")
//   const [errorMessage, setErrorMessage] = useState<string>("")
//   const [details, setDetails] = useState<string>("")

//   const checkFirebase = async () => {
//     setStatus("checking")
//     setErrorMessage("")
//     setDetails("")

//     try {
//       console.log("التحقق من اتصال Firebase...")

//       // التحقق من وجود مجموعة posts
//       try {
//         console.log("التحقق من وجود مجموعة 'blogs'...")
//         const postsCollection = collection(db, "blogs")
//         const postsQuery = query(postsCollection, limit(1))
//         const querySnapshot = await getDocs(postsQuery)

//         console.log("نتيجة الاستعلام:", querySnapshot)
//         console.log("عدد الوثائق:", querySnapshot.size)

//         if (querySnapshot.empty) {
//           setDetails((prev) => prev + "\n- مجموعة 'blogs' موجودة ولكنها فارغة. يرجى إضافة بعض الوثائق.")
//         } else {
//           setDetails((prev) => prev + `\n- تم العثور على ${querySnapshot.size} وثيقة في مجموعة 'blogs'.`)

//           // عرض بيانات الوثيقة الأولى للتحقق
//           const firstDoc = querySnapshot.docs[0]
//           const data = firstDoc.data()
//           setDetails((prev) => prev + `\n- معرف الوثيقة الأولى: ${firstDoc.id}`)
//           setDetails((prev) => prev + `\n- بيانات الوثيقة: ${JSON.stringify(data, null, 2)}`)
//         }

//         setStatus("success")
//       } catch (error: any) {
//         console.error("خطأ في الوصول إلى مجموعة 'blogs':", error)
//         setErrorMessage(`خطأ في الوصول إلى مجموعة 'blogs': ${error.message}`)
//         setDetails((prev) => prev + `\n- خطأ: ${error.message}`)
//         setStatus("error")
//       }
//     } catch (error: any) {
//       console.error("خطأ في التحقق من Firebase:", error)
//       setErrorMessage(`خطأ في التحقق من Firebase: ${error.message}`)
//       setStatus("error")
//     }
//   }

//   useEffect(() => {
//     checkFirebase()
//   }, [])

//   return (
//     <div></div>
//   )
// }

// مكون إضافة مقال نموذجي
// function AddPostHelper() {
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
//   const [errorMessage, setErrorMessage] = useState<string>("")

//   const addSamplePost = async () => {
//     setStatus("loading")
//     setErrorMessage("")

//     try {
//       const samplePost = {
//         author: "نورا عبد الله",
//         category: "تجربة العميل",
//         content:
//           "<p>الانطباع الأول يلعب دوراً محورياً في تشكيل نظرة العميل نحو علامتك التجارية.</p> <h2>لماذا يعتبر الانطباع الأول مهماً؟</h2> <p>في ثوانٍ معدودة، يكوّن العميل رأياً عن شركتك، مما يؤثر على قراراته المستقبلية.</p> <h2>كيف تترك انطباعاً أولياً إيجابياً؟</h2> <h3>1. الاستقبال الحار</h3> <p>ابدأ كل تفاعل مع العميل بابتسامة وترحيب حار.</p> <h3>2. المظهر الاحترافي</h3> <p>مظهر موظفيك ومكان عملك يعكس احترافيتك وجودة خدماتك.</p> <h3>3. السرعة في تقديم الخدمة</h3> <p>كلما كانت الخدمة أسرع وأكثر كفاءة، زادت إيجابية الانطباع الأول.</p> <h2>الخلاصة</h2> <p>ترك انطباع أول إيجابي مفتاح لبناء علاقات طويلة الأمد مع العملاء وضمان ولائهم المستقبلي.</p>",
//         createdAt: serverTimestamp(),
//         date: "5 أبريل 2023",
//         excerpt: "تعرف على تأثير الانطباع الأول على تجربة العميل وكيفية ترك انطباع إيجابي يدوم طويلاً.",
//         image: "/placeholder.svg?height=600&width=1200",
//         tags: ["الانطباع الأول", "تجربة العميل", "ولاء العملاء"],
//         title: "دور الانطباع الأول في نجاح تجربة العميل",
//         updatedAt: serverTimestamp(),
//       }

//       console.log("جاري إضافة مقال نموذجي إلى مجموعة 'blogs'...")
//       const postsCollection = collection(db, "blogs")
//       const docRefNew = await addDoc(postsCollection, samplePost)

//       console.log("تم إضافة المقال بنجاح بمعرف:", docRefNew.id)
//       setStatus("success")
//     } catch (error: any) {
//       console.error("خطأ في إضافة المقال النموذجي:", error)
//       setErrorMessage(`خطأ في إضافة المقال النموذجي: ${error.message}`)
//       setStatus("error")
//     }
//   }

//   return (
//     <div className="mb-8 p-4 border rounded-lg">
//       <h2 className="text-xl font-bold mb-4">أداة مساعدة لإضافة مقال نموذجي</h2>

//       {status === "loading" && (
//         <Alert>
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>جاري التنفيذ</AlertTitle>
//           <AlertDescription>جاري إضافة مقال نموذجي...</AlertDescription>
//         </Alert>
//       )}

//       {status === "success" && (
//         <Alert>
//           <AlertCircle className="h-4 w-4 text-green-500" />
//           <AlertTitle className="text-green-500">تم بنجاح</AlertTitle>
//           <AlertDescription>تم إضافة المقال النموذجي بنجاح. قم بتحديث الصفحة لرؤية المقال الجديد.</AlertDescription>
//         </Alert>
//       )}

//       {status === "error" && (
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>خطأ</AlertTitle>
//           <AlertDescription>{errorMessage}</AlertDescription>
//         </Alert>
//       )}

//       <div className="mt-4">
//         <Button onClick={addSamplePost} disabled={status === "loading"}>
//           إضافة مقال نموذجي
//         </Button>
//       </div>
//     </div>
//   )
// }

// مكون محتوى المقال
function BlogContent({ content }: { content: string }) {
  return (
    <article
      className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-primary"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

// مكون رأس المقال
function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <Link href="/" className="text-muted-foreground hover:text-primary flex items-center gap-1 rtl:text-right">
          <ArrowRight className="h-4 w-4" />
          <span>العودة إلى المدونة</span>
        </Link>
      </div>

      <div className="space-y-4">
        <Badge variant="outline" className="text-sm">
          {post.category}
        </Badge>

        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>

        <p className="text-xl text-muted-foreground">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      <div className="relative h-[300px] md:h-[400px] w-full mt-6 rounded-lg overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg?height=600&width=1200"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

// ======== الصفحات الرئيسية ========

// صفحة المقال
function BlogPostPage({ id }: { id: string }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchPost() {
      setLoading(true)
      setError(null)

      try {
        // For sample posts (when Firestore is unavailable)
        if (id.startsWith("sample-")) {
          const samplePost = FALLBACK_POSTS.find((post) => post.id === id)
          if (samplePost) {
            setPost(samplePost)
          } else {
            setError("المقال غير موجود")
            router.push("/404")
          }
          setLoading(false)
          return
        }

        // Set a timeout to detect if Firestore is taking too long
        const timeoutPromise = new Promise<null>((_, reject) => {
          setTimeout(() => reject(new Error("قاعدة البيانات غير متاحة حالياً")), 5000)
        })

        // Actual Firestore fetch
        const fetchPromise = async () => {
          const docRef = doc(db, "blogs", id)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as BlogPost
          } else {
            return null
          }
        }

        // Race between timeout and fetch
        const result = await Promise.race([fetchPromise(), timeoutPromise])

        if (result) {
          setPost(result)
        } else {
          setError("المقال غير موجود")
          router.push("/404")
        }
      } catch (error: any) {
        console.error("Error fetching post:", error)
        setError(`حدث خطأ أثناء تحميل المقال: ${error.message}`)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPost()
    }
  }, [id, router])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-40 bg-muted rounded"></div>
          <div className="h-12 w-full bg-muted rounded"></div>
          <div className="h-6 w-3/4 bg-muted rounded"></div>
          <div className="h-6 w-1/2 bg-muted rounded"></div>
          <div className="h-[300px] w-full bg-muted rounded"></div>
          <div className="space-y-2">
            <div className="h-6 w-full bg-muted rounded"></div>
            <div className="h-6 w-full bg-muted rounded"></div>
            <div className="h-6 w-3/4 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription>{error || "المقال غير موجود"}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <Link href="/">
            <Button>العودة إلى الصفحة الرئيسية</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {id.startsWith("sample-") && (
        <div className="mb-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>ملاحظة</AlertTitle>
            <AlertDescription>هذا مقال نموذجي يتم عرضه لأن قاعدة البيانات غير متاحة حالياً.</AlertDescription>
          </Alert>
        </div>
      )}

      <BlogHeader post={post} />
      <BlogContent content={post.content} />
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-bold mb-2">الوسوم:</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-muted px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ======== المكون الرئيسي ========
export default function App() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // تأخير قصير لإظهار حالة التحميل
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // التحقق مما إذا كان المسار الحالي هو صفحة مقال
  const blogPostMatch = pathname.match(/^\/blog\/(.+)$/)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    )
  }

  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background">
      {blogPostMatch ? (
        // عرض صفحة المقال
        <BlogPostPage id={blogPostMatch[1]} />
      ) : (
        // عرض الصفحة الرئيسية
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-2">المدونة</h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">أحدث المقالات والمدونات حول التسويق الذكي وتحسين تجربة العملاء</p>
          </div>

          {/* <FirebaseChecker /> */}
          {/* <AddPostHelper /> */}

          <div className="mb-8">
            <SearchBar />
          </div>

          <BlogList />
        </div>
      )}
    </div>
  )
}

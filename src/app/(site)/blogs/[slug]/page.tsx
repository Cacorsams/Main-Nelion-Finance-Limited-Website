import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icon } from "@iconify/react";
import BlogNewsletter from "@/app/components/blog/BlogNewsletter";
import SocialShare from "@/app/components/blog/SocialShare";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: any) {
    const data = await params;
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const post = getPostBySlug(data.slug, [
        "title",
        "author",
        "content",
        "metadata",
    ]);

    const siteName = process.env.SITE_NAME || "Your Site Name";
    const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    if (post) {
        const metadata = {
            title: `${post.title || "Single Post Page"} | ${siteName}`,
            author: authorName,
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
            author: authorName,
            robots: {
                index: false,
                follow: false,
                nocache: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };
    }
}

export default async function Post({ params }: any) {
    const data = await params;
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const post = getPostBySlug(data.slug, [
        "title",
        "author",
        "authorImage",
        "content",
        "coverImage",
        "date",
    ]);

    return (
        <div className="bg-white dark:bg-darkmode min-h-screen">
            <section className="relative pt-44 pb-20 overflow-hidden">
                {/* DECORATIVE GLASS BLURS */}
                <div className="absolute top-0 right-0 size-[600px] bg-primary/10 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 size-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />

                <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-12">
                        <div className="col-span-8" data-aos="fade-right">
                            <div className="flex items-center gap-6 mb-8">
                                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
                                    {format(new Date(post.date), "dd MMM yyyy")}
                                </span>
                                <div className="size-2 bg-gray/30 rounded-full" />
                                <span className="text-gray dark:text-gray-400 font-medium">Insights</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-midnight_text dark:text-white uppercase tracking-tighter leading-none italic mb-8">
                                {post.title}
                            </h1>
                        </div>
                        <div className="col-span-4" data-aos="fade-left">
                            <div className="p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-2xl flex items-center gap-6">
                                <div className="size-20 relative rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image
                                        src={post.authorImage}
                                        alt={post.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-midnight_text dark:text-white leading-tight uppercase tracking-tight">{post.author || "Nelion Admin"}</p>
                                    <p className="text-primary font-black uppercase text-xs tracking-widest mt-1">Founding Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-32 px-4">
                <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto">
                    <div className="relative group mb-24" data-aos="zoom-in">
                        <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-[4rem] group-hover:bg-primary/10 transition-colors" />
                        <div className="relative h-[400px] md:h-[650px] overflow-hidden rounded-[3rem] shadow-2xl border border-white/20">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                priority
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <article className="prose prose-xl dark:prose-invert max-w-none 
                                prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-headings:italic
                                prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                                prose-img:rounded-[2.5rem] prose-img:shadow-2xl
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                border-t border-border dark:border-dark_border pt-16">
                                <Markdown>{post.content}</Markdown>
                                <SocialShare title={post.title} variant="bottom" />
                            </article>
                        </div>

                        <div className="lg:col-span-4 space-y-12">
                            <div className="sticky top-32 space-y-8">
                                {/* SHARE BOX */}
                                <SocialShare title={post.title} variant="sidebar" />

                                {/* NEWSLETTER BOX */}
                                <BlogNewsletter />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

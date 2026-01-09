
import BlogCard from "@/app/components/shared/blog/blogCard";
import HeroSub from "@/app/components/shared/hero-sub";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/constants";

export const metadata: Metadata = {
    title: `Insights & Momentum | ${COMPANY_NAME}`,
};

const Blog = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/blogs", text: "News & Insights" },
    ];

    return (
        <div className="bg-white dark:bg-darkmode min-h-screen">
            <HeroSub
                title="Knowledge Hub"
                description="Strategic financial insights and community growth narratives designed to empower the Tanzanian entrepreneur."
                breadcrumbLinks={breadcrumbLinks}
            />
            <section className="py-20 px-4 relative">
                {/* DECORATIVE GLASS ELEMENTS */}
                <div className="absolute top-0 left-1/4 size-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="absolute bottom-0 right-1/4 size-[500px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

                <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto ">
                    <div className="grid grid-cols-12 lg:gap-14 gap-6">
                        {posts.map((blog, i) => (
                            <div key={i} className="w-full col-span-12 lg:col-span-6" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="p-1 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 rounded-[2rem] backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                                    <BlogCard blog={blog} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;

import React, { FC } from "react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Blog } from "@/app/types/data/blog";
import { Icon } from "@iconify/react";

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
    const { title, coverImage, excerpt, date, slug } = blog;
    return (
        <Link href={`/blogs/${slug}`} className="flex flex-col sm:flex-row gap-6 group overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-2xl flex-shrink-0 w-full sm:w-52 h-52 sm:h-48 shadow-lg">
                <Image
                    src={coverImage!}
                    alt={title || ""}
                    fill
                    className="transition duration-700 group-hover:scale-110 object-cover"
                />
                <div className="absolute inset-0 bg-midnight_text/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                        {format(new Date(date), "MMM dd, yyyy")}
                    </span>
                    <div className="size-1 bg-gray/30 rounded-full" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">Financial Insights</span>
                </div>
                <h3 className="text-2xl font-black text-midnight_text dark:text-white uppercase tracking-tighter italic leading-none group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2 text-sm leading-relaxed">
                    {excerpt}
                </p>
                <div className="flex items-center gap-2 mt-2 group/btn">
                    <span className="text-midnight_text dark:text-white font-black uppercase text-xs tracking-widest border-b-2 border-primary pb-1">
                        Read Narrative
                    </span>
                    <Icon icon="mdi:arrow-right" className="text-primary group-hover/btn:translate-x-2 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;

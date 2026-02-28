import {news} from "@/app/data/news"

export async function generateStaticParams() {
    return news.map((item) => ({
        slug: item.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string}> }) {
    const {slug} = await params
    return (
        <div>News: {slug}</div>
    )
}
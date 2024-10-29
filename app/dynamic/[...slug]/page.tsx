export default function slug({ params }: { params: { slug: string } }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1>{params.slug}</h1>
            <h1>bholu</h1>
        </div>
    );
}

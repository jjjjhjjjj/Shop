export default function Banner() {
  return (
    <section className="h-80 bg-green-600 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-80" />
      <div className="absolute w-full top-28 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl">Shop With US</h2>
        <p className="text-2xl mt-5">Best Products, High Quality</p>
      </div>
    </section>
  );
}

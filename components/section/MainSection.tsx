export default function MainSection() {
  return (
    <section className="h-full">
      <div className="flex shrink-0">
        {[1, 2, 3].map((index: number) => (
          <div key={index}>Card</div>
        ))}
      </div>
      <div>Big Card</div>
      <div>banner Carousel</div>
      <div>icon menu</div>
      <div>우리동네</div>
    </section>
  );
}

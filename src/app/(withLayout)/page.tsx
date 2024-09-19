
export default function Home() {
  return (
    <section className="flex flex-col items-center  justify-center gap-4 py-8 md:py-10 !pt-28">
      <div className="inline-block max-w-xl text-center justify-center">
        <Title text="Join&nbsp;" />
        <Title text="RecycLink" className="text-[#2cbff0]"/>

        <br />
        <p className=" text-[18px] md:text-[20px] lg:text-[22px] text-default-500 mt-4 lg:mt-5 leading-relaxed">
          {" "}
          Empowering communities to recycle, donate, share, reuse, and reduce
          waste.
        </p>
      </div>
    </section>
  );
}




const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h1 className={`${className}  text-4xl md:text-5xl lg:text-6xl tracking-tight inline font-semibold `}>
      {text}
    </h1>
  );
};

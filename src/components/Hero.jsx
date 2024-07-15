import Button from './Button';

export default function Hero() {
  return (
    <div className="min-h-screen max-w-[800px] flex flex-col gap-10 items-center justify-center text-center w-full mx-auto">
      <div className="flex flex-col gap-4 p-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:texxt-5xl md:6xl lg:7xl">
          GYM-<span className="text-blue-400">RAT</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Lorem ipsum dolor sit amet <span className="text-blue-400 font-medium">adipisicing</span> elit. Suscipit amet porro explicabo molestias eos, sint dicta dolorem. <span className="text-blue-400 font-medium">Cum</span>, aperiam nihil
        obcaecati fugit reiciendis provident, accusantium voluptas, quisquam perspiciatis rem nam?
      </p>
      <Button
        func={() => {
          window.location.href = '#generate'
        }}
        text={'Accept & Begins'}
      ></Button>
    </div>
  );
}

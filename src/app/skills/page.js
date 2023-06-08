import Image from 'next/image';
import javascript from "../../../public/javascript.png";
import typescript from "../../../public/typescript.png";

export default function Experience() {
  return (
    <div>
      <section>
        <h1 className="text-4xl font-bold mb-12">Technical Skills</h1>
        <div className='flex items-center gap-8 flex-wrap'>
          <div className='flex items-center justify-center border-2 border-slate-50 py-2 w-44 rounded-md gap-2'>
            <Image
              priority
              src={javascript}
              alt="javascript"
            />
            <p>Javascript</p>
          </div>
          <div className='flex items-center justify-center border-2 border-slate-50 py-2 w-44 rounded-md gap-2'>
            <Image
              priority
              src={typescript}
              alt="typescript"
            />
            <p>Typescript</p>
          </div>
        </div>
      </section>
      <section>
        <h1>Soft Skills</h1>
      </section>
    </div>
  )
}

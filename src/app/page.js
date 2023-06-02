import Image from 'next/image';
import github from '../../public/github.svg';
import linkedIn from '../../public/linkedin.svg';

export default function Home() {
  return (
    <section>
      <h1 className="tracking-widest text-4xl font-semibold mb-12">
        I'M RAJATH ACHARYA
      </h1>
      <p>
        A Software Developer based in Mangalore, Karnataka, India.
      </p>
      <article className='flex'> 
        <a href='https://github.com/Rajath-Acharya' target="_blank">
          <Image
            priority
            src={github}
            alt="github"
          />
        </a>
        <a href='https://www.linkedin.com/in/rajath-acharya-068194135/' target="_blank">
          <Image
            priority
            src={linkedIn}
            alt="linkedIn"
          />
        </a>
      </article>
    </section>
  )
}

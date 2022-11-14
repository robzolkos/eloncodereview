import Image from 'next/future/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/mohsen.jpg'
import avatarImage7 from '@/images/avatars/avatar-7.png'

const testimonials = [
  [
    {
      content:
        "It used to take me forever to get my code reviewed.  Since Friday, I've been printing it all out and getting Elon to look at it and my god its been amazing!!",
      author: {
        name: 'Sheryl',
        role: 'Software Developer',
        image: avatarImage1,
      },
    },
    {
      content:
        "This is a gamechanger.  Kicking myself I didn't think of this.  Would have made ProductHunt #1",
      author: {
        name: 'Amy',
        role: 'IOS Developer',
        image: avatarImage4,
      },
    },
    {
      content:
        'I love how Elon handwrites the reviews and grades my code. Just like my college professors. From 1940s.',
      author: {
        name: 'Rishabh',
        role: 'SRE Engineer',
        image: avatarImage7,
      },
    },
  ],
  [
    {
      content:
        'Paper is not dead!  What an amazing medium to get code reviews done!  I love it.',
      author: {
        name: 'Leland',
        role: 'Android Developer',
        image: avatarImage5,
      },
    },
    {
      content:
        "I lol'ed when asked to print out my code but for real this works.",
      author: {
        name: 'Erin',
        role: 'Web Developer',
        image: avatarImage2,
      },
    },
    {
      content:
        'I tell my students the best way to learn programming is to hand write your code.  I recommend everyone send their hand-written code to Elon Musk for review.',
      author: {
        name: 'Mohsen Modhej',
        role: 'Expert Developer',
        image: avatarImage6,
      },
    },
  ],
  [
    {
      content:
        'This makes me even more efficient.  I just push my code, print it out and mail it in!  And now with Fax its even quicker!!',
      author: {
        name: 'Peter',
        role: 'Ruby on Rails Developer',
        image: avatarImage3,
      },
    },
    {
      content:
        'This is really my jam! Print outs, faxes and hand written code reviews. Retro but unmistakingly the future.',
      author: {
        name: 'Fred',
        role: 'Cobol Developer',
        image: avatarImage5,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by developers worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our process is so simple and efficient that people can&apos;t help
            but fall in love with code reviews conducted by Elon Musk on your
            very own print outs.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

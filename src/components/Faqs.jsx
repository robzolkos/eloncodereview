import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Elon Musk review the code personally?',
      answer:
        'Of course!  Elon has rescheduled large blocks of time away from making electric cars and saving humanity by colonizing Mars to focus almost entirely on reviewing YOUR code.',
    },


  ],
  [
    {
      question: 'Sounds expensive.  How much does this cost?',
      answer: 'This service is very inexpensive.  Check out our pricing table.  To ensure the continuation of life on planet Earth code reviews are one of the safest ways to ensure no large infestations of bugs occur.',
    },
  ],
  [
    {
      question: 'How do I apply for a job helping with these code reviews?',
      answer:
        "Due to Elon's fanatical adherance to time mangement principles and his magical 'LGTM' commentary there won't ever be a pull request that goes un-reviewed for longer than 2 to 3 minutes.  As such we do not foresee needing to hire any more people.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Such an awe-inspiring service yet simple service is hard to beleive - so you may have some questions.  Here are some of the more frequent asked.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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

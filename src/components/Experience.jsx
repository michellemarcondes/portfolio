import Slider from 'react-slick'

const images = [
  '/public/Certificado Harvard.pdf',
  '/public/Certificado HTML.pdf',
]

export default function Experience() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">←</button>,
    nextArrow: <button className="slick-next">→</button>,
  }

  return (
    <div className="text-center">
      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Experience</span>
      <p className="mt-3 text-gray-600 dark:text-dark-200">Here is a quick summary of my most recent experiences:</p>
      <div className="mt-6 card p-4">
        <Slider {...settings}>
          {["/public/logo modo claro.png"].map((src, idx) => (
            <div key={idx} className="px-4">
              <img src={src} className="rounded-lg mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarmiteAppCard({marmiteApp}) {

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

    const { titre, slug, tempsDeCuisson, thumbnail } = marmiteApp.fields
    return (
        <div className="card" ref={addToRefs}>
            <div className="features">
                <Image 
                    src={'https:' + thumbnail.fields.file.url}
                    width='550px'
                    height='280px'
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ titre }</h4>
                    <div>Aarno accompagne la marque depuis {tempsDeCuisson} ans</div>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>La marque</a></Link>
                </div>
            </div>
            <style jsx>{`
        // .card {
        //   transform: rotateZ(-1deg);
        // }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
        </div>
    )
}


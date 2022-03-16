import Link from 'next/link'
import Image from 'next/image'

export default function MarmiteAppCard({marmiteApp}) {
    const { titre, slug, tempsDeCuisson, thumbnail } = marmiteApp.fields
    return (
        <div className="card">
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
        .card {
          transform: rotateZ(-1deg);
        }
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

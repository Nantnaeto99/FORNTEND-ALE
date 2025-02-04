
import image1 from '../assets/images/card_view_administartion/image1.jpg';
import image2 from '../assets/images/card_view_administartion/image2.jpg';
import image3 from '../assets/images/card_view_administartion/image3.jpg';
import image4 from '../assets/images/card_view_administartion/image4.jpg';
import '../assets/styles/administration.css';

const Administration = () => {
    const cardData = [  // Combined data
        {
            image: image1,
            person: { name: "Mr. Nani Naeto", title: "Ale Zone Admin", link: "" }
        },
        {
            image: image2,
            person: { name: "Mr. Nani Naeto", title: "Head Office...", link: "" }
        },
        {
            image: image3,
            person: { name: "Mrs. Nani Naeto", title: "Vice President...", link: "" }
        },
        {
            image: image4,
            person: { name: "Mr. Nani Naeto", title: "Deputy Head...", link: "" }
        }
    ];

    return (
        <div>
            <h4>Administration</h4>
            <p>
                The Ale Zone Regional Administration, led by a team of committed
                officials including the President, Vice President, and other key
                members, is the driving force behind the region's governance and
                strategic development. This dedicated team works collaboratively to
                uphold the region's values, ensuring a future where tradition and
                progress coexist harmoniously.
            </p>


            <div className="card-container">
                {cardData.map((item, index) => ( // Map over cardData
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.person.name} className="card-image" /> {/* alt text from person's name */}
                        <div className="card-content">
                            <h3 className="card-title">{item.person.name}</h3>
                            <p className="card-description">{item.person.title}</p>
                            {item.person.link && (
                                <a href={item.person.link} target="_blank" rel="noopener noreferrer">
                                    Learn More
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Administration;
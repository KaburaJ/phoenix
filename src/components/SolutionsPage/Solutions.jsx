import React, { useState } from "react"
import '../SolutionsPage/Solutions.css'
import Navbar from "../../common/Navbar/Navbar"
import Footer from "../../common/footer/Footer"
import solutionsimage from '../../images/Rectangle 53.png'
import solutionsimage1 from '../../images/i-want-a-microcontroller-based-image-that-is-unique-and-fascinating-for-use-on-a-website-741466457.png'
import { FaAngleDoubleRight } from "react-icons/fa"

const SolutionsPage = () => {
    const solutionsData = [
        { id: 1, image: [solutionsimage, solutionsimage1], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 2, image: [solutionsimage], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 3, image: [solutionsimage, solutionsimage1], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 4, image: [solutionsimage], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 5, image: [solutionsimage], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 6, image: [solutionsimage], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 7, image: [solutionsimage, solutionsimage1], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 8, image: [solutionsimage], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 9, image: [solutionsimage], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 10, image: [solutionsimage, solutionsimage1], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 11, image: [solutionsimage], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 12, image: [solutionsimage, solutionsimage1], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 13, image: [solutionsimage], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 14, image: [solutionsimage], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 15, image: [solutionsimage, solutionsimage1], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 16, image: [solutionsimage], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
        { id: 17, image: [solutionsimage], category: 'Category A', title: 'Solution A', description: 'Description of Solution A' },
        { id: 18, image: [solutionsimage], category: 'Category B', title: 'Solution B', description: 'Description of Solution B' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredSolutions = selectedCategory === 'All'
        ? solutionsData
        : solutionsData.filter(solution => solution.category === selectedCategory);

    const [currentImageIndices, setCurrentImageIndices] = useState(
        filteredSolutions.reduce((acc, solution) => ({ ...acc, [solution.id]: 0 }), {})
    );

    const handleAngleIconClick = (solutionId) => {
        setCurrentImageIndices(prevIndices => ({
            ...prevIndices,
            [solutionId]: (prevIndices[solutionId] + 1) % filteredSolutions.find(solution => solution.id === solutionId).image.length
        }));
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Navbar />
            <div className="solutions-body">
                <div className='solutions-main'>
                    <div className='solutions-headers'>
                        <div className='main-context'>
                            <p className='app-name'>
                                <span>O</span>
                                <span>U</span>
                                <span>R</span>
                                <span style={{ width: '5px' }}></span>
                                <span>S</span>
                                <span>O</span>
                                <span>L</span>
                                <span>U</span>
                                <span>T</span>
                                <span>I</span>
                                <span>O</span>
                                <span>N</span>
                                <span>S</span>
                            </p>
                            <div className="sub-container">
                                <div className='main-text'>
                                    <span className='span-green'>Watch</span>
                                    <span className='span-green'>as</span>
                                    <span className='span-green'>your</span>
                                    <span className='span-green'>Vision</span>
                                    <span className='span-green'>Comes</span>
                                    <span className='span-green'>to</span>
                                    <span className='span-green'>Life</span>
                                </div>
                                <img className='solutions-image' src={solutionsimage}></img>
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filter-section">
                            <label>Filter by Category:</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Category A">Category A</option>
                                <option value="Category B">Category B</option>
                            </select>
                        </div>
                        <div className='solutions-main'>
                            <div className='solutions-headers-2'>
                                <div className='solution-context'>
                                    {filteredSolutions.map((solution) => (
                                        <div key={solution.id} className="solution-card">
                                            {solution.image && solution.image.length > 1 && (
                                                <FaAngleDoubleRight className="arrow-icon" onClick={() => handleAngleIconClick(solution.id)} />
                                            )}
                                            <img src={solution.image[currentImageIndices[solution.id]]} alt={`Solution ${solution.id}`} />
                                            <h3>{solution.title}</h3>
                                            <p>{solution.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SolutionsPage
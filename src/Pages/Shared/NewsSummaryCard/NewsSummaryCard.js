import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaShare, FaBookmark, FaStar, FaEye } from "react-icons/fa6";

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, total_view, image_url, rating } = news;
    console.log(news);
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image className='me-2' src={author?.img} style={{ height: '60px' }} roundedCircle />
                    <div>
                        <p className='mb-0 text-bold'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShare></FaShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '...'}<Link to={`/news/${news._id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between ">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>  Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup as="ul">
                    <ListGroup.Item className='mb-2' as="li">
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2' as="li">
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2' as="li">
                        <FaWhatsapp /> Whatsapp
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2' as="li">
                        <FaYoutube /> Youtube
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2' as="li">
                        <Button variant="link">Terms & Conditions</Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;
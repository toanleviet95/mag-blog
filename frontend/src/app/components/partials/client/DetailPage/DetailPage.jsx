import React from 'react';
import { connect } from 'react-redux';

class DetailPage extends React.Component {
    render() {
        return (
            <div className="single-page">
                <div className="single-page-artical">
                    <div className="artical-content">
                        <img src="images/single-post-pic.jpg" title="banner1"/>
                        <h3><a href="#">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
                    </div>
                    <div className="artical-links">
                        <ul>
                            <li><a href="#"><img src="images/blog-icon2.png" title="Admin"/><span>admin</span></a></li>
                            <li><a href="#"><img src="images/blog-icon3.png" title="Comments"/><span>No comments</span></a></li>
                            <li><a href="#"><img src="images/blog-icon4.png" title="Lables"/><span>View posts</span></a></li>
                        </ul>
                        </div>
                        <div className="share-artical">
                        <ul>
                            <li><a href="#"><img src="images/facebooks.png" title="facebook"/>Facebook</a></li>
                            <li><a href="#"><img src="images/twiter.png" title="Twitter"/>Twiiter</a></li>
                            <li><a href="#"><img src="images/google+.png" title="google+"/>Google+</a></li>
                            <li><a href="#"><img src="images/rss.png" title="rss"/>Rss</a></li>
                        </ul>
                    </div>
                    <div className="clear"> </div>
                </div>
                <div className="comment-section">
                    <div className="grids_of_2">
                        <h2>Comments</h2>
                        <div className="grid1_of_2">
                            <div className="grid_img">
                                <a href=""><img src="images/pic10.jpg" alt=""/></a>
                            </div>
                            <div className="grid_text">
                                <h4 className="style1 list"><a href="#">Uku Mason</a></h4>
                                <h3 className="style">march 2, 2013 - 12.50 AM</h3>
                                <p className="para top"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                                <a href="" className="btn1">Click to Reply</a>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="grid1_of_2 left">
                            <div className="grid_img">
                                <a href=""><img src="images/pic10.jpg" alt=""/></a>
                            </div>
                            <div className="grid_text">
                                <h4 className="style1 list"><a href="#">Designer First</a></h4>
                                <h3 className="style">march 3, 2013 - 4.00 PM</h3>
                                <p className="para top"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                                <a href="" className="btn1">Click to Reply</a>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="grid1_of_2">
                            <div className="grid_img">
                                <a href=""><img src="images/pic12.jpg" alt=""/></a>
                            </div>
                            <div className="grid_text">
                                <h4 className="style1 list"><a href="#">Ro Kanth</a></h4>
                                <h3 className="style">march 2, 2013 - 12.50 AM</h3>
                                <p className="para top"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                                <a href="" className="btn1">Click to Reply</a>
                            </div>
                            <div className="clear"></div>
                        </div>								
                        <div className="artical-commentbox">
                            <h2>Leave a Comment</h2>
                            <div className="table-form">
                                <form action="#" method="post" name="post_comment">
                                    <div>
                                        <label>Name<span>*</span></label>
                                        <input type="text" value=" "/>
                                    </div>
                                    <div>
                                        <label>Email<span>*</span></label>
                                        <input type="text" value=" "/>
                                    </div>
                                    <div>
                                        <label>Your Comment<span>*</span></label>
                                        <textarea> </textarea>	
                                    </div>
                                </form>
                                <input type="submit" value="submit"/>
                                    
                            </div>
                            <div className="clear"> </div>
                        </div>			
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect()(DetailPage);
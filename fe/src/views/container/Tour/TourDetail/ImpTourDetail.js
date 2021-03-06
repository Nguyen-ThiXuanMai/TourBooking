import React, {  useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { connect } from "react-redux";
import { appApisActions } from "~/state/ducks/appApis/index";
import { Button, Image } from "antd";
import "pure-react-carousel/dist/react-carousel.es.css";
import SingleContentTourDetail from "./SingleContentTourDetail.js";
import DescriptionTourDetail from "./DescriptionTourDetail.js";
import ItineraryTourDetail from "./ItineraryTourDetail.js";
import ScheduleTourDetail from "./ScheduleTourDetail.js";
import LocationTourDetail from "./LocationTourDetail.js";
import EvaluateTourDetail from "./EvaluateTourDetail.js";
import ReviewTourDetail from "./ReviewTourDetail.js";
import CommentTourDetail from "./CommentTourDetail.js";
import BookingFormTourDetail from "./BookingFormTourDetail.js";
import EnquiryFormTourDetail from "./EnquiryFormTourDetail.js";
import { firstImage } from "~/views/utilities/helpers/utilObject.js";
import VideoComponent from "./VideoComponent.js";
import ImageComponent from "./ImageComponent.js";

const ImpTourDetailStyled = styled.div`
   .style-image {
      max-height: 300px;
   }
`;

function ImpTourDetail(props) {
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [isModalVisibleImage, setIsModalVisibleImage] = useState(false);

   return (
      <ImpTourDetailStyled>
         <section className='py-0 position-relative'>
            <Image className='style-image' src={firstImage(_.head(props.tourDetail?.images)?.url || "")} width='100%' height='100%' />
            <div className='position-absolute ' style={{ bottom: 32, left: 32 }}>
               <Button className='btn-image mx-2' onClick={() => setIsModalVisibleImage(true)}>
                  Hình ảnh
               </Button>
               <Button className='btn-video mx-2' onClick={() => setIsModalVisible(true)}>
                  Video
               </Button>
               <VideoComponent isModalVisible={isModalVisible} onCancel={() => setIsModalVisible(false)} urlVideo={props.tourDetail?.video}
               />
               <ImageComponent
                  isModalVisibleImage={isModalVisibleImage}
                  onCancel={() => setIsModalVisibleImage(false)}
                  urlImage={props.tourDetail?.images}
               />
            </div>
            <div>
               <div className='container'>
                  <div className='row'>
                     <div className='col-lg-12'></div>
                  </div>
               </div>
            </div>
         </section>
         <section className='tour-detail-area padding-bottom-90px'>
            <div className='single-content-navbar-wrap menu section-bg' id='single-content-navbar'>
               <div className='container'>
                  <div className='row'>
                     <div className='col-lg-12'>
                        <div className='single-content-nav' id='single-content-nav'>
                           <ul>
                              <li>
                                 <a data-scroll='description' href='#description' className='scroll-link active'>
                                    Mô tả ngắn
                                 </a>
                              </li>
                              <li>
                                 <a data-scroll='itinerary' href='#itinerary' className='scroll-link'>
                                    Hành trình
                                 </a>
                              </li>
                              <li>
                                 <a data-scroll='photo' href='#photo' className='scroll-link'>
                                    Chi tiết
                                 </a>
                              </li>
                              <li>
                                 <a data-scroll='location-map' href='#location-map' className='scroll-link'>
                                    Bản đồ
                                 </a>
                              </li>
                              <li>
                                 <a data-scroll='reviews' href='#reviews' className='scroll-link'>
                                    Đánh giá
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* end single-content-navbar-wrap */}
            <div className='single-content-box'>
               <div className='container'>
                  <div className='row'>
                     <div className='col-lg-8'>
                        <div className='single-content-wrap padding-top-60px'>
                           <div id='description' className='page-scroll'>
                              <SingleContentTourDetail tourDetail={props.tourDetail} />
                              <div className='section-block' />
                              <div className='single-content-item padding-top-40px padding-bottom-40px'>
                                 <DescriptionTourDetail tourDetail={props.tourDetail} />
                              </div>
                              {/* end single-content-item */}
                              <div className='section-block' />
                           </div>
                           {/* end description */}
                           <ItineraryTourDetail tourDetail={props.tourDetail} />
                           <ScheduleTourDetail tourDetail={props.tourDetail} />
                           <LocationTourDetail />
                           <EvaluateTourDetail />
                           <div className='review-box'>
                              <div className='single-content-item padding-top-40px'>
                                 <ReviewTourDetail />
                                 <CommentTourDetail />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-4'>
                        <div className='sidebar single-content-sidebar mb-0'>
                           <BookingFormTourDetail tourDetail={props.tourDetail} />
                           <br></br>
                           <EnquiryFormTourDetail />
                           <br></br>
                           <div className='sidebar-widget single-content-widget'>
                              <h3 className='title stroke-shape'>Why Book With Us?</h3>
                              <div className='sidebar-list'>
                                 <ul className='list-items'>
                                    <li>
                                       <i className='la la-dollar icon-element mr-2' />
                                       No-hassle best price guarantee
                                    </li>
                                    <li>
                                       <i className='la la-microphone icon-element mr-2' />
                                       Customer care available 24/7
                                    </li>
                                    <li>
                                       <i className='la la-thumbs-up icon-element mr-2' />
                                       Hand-picked Tours &amp; Activities
                                    </li>
                                    <li>
                                       <i className='la la-file-text icon-element mr-2' />
                                       Free Travel Insureance
                                    </li>
                                 </ul>
                              </div>
                              {/* end sidebar-list */}
                           </div>
                           {/* end sidebar-widget */}
                           <div className='sidebar-widget single-content-widget'>
                              <h3 className='title stroke-shape'>Get a Question?</h3>
                              <p className='font-size-14 line-height-24'>
                                 Do not hesitate to give us a call. We are an expert team and we are happy to talk to
                                 you.
                              </p>
                              <div className='sidebar-list pt-3'>
                                 <ul className='list-items'>
                                    <li>
                                       <i className='la la-phone icon-element mr-2' />
                                       <a href='#'>+ 61 23 8093 3400</a>
                                    </li>
                                    <li>
                                       <i className='la la-envelope icon-element mr-2' />
                                       <a href='mailto:info@trizen.com'>info@trizen.com</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='related-tour-area section--padding'>
            <div className='container'>
               <div className='row'>
                  <div className='col-lg-12'>
                     <div className='section-heading text-center'>
                        <h2 className='sec__title'>You might also like</h2>
                     </div>
                  </div>
               </div>

               <div className='row padding-top-50px'>
                  <div className='col-lg-4 responsive-column'>
                     <div className='card-item trending-card'>
                        <div className='card-img'>
                           <a href='tour-details.html' className='d-block'>
                              <img src='images/img9.jpg' alt='Destination-img' />
                           </a>
                        </div>
                        <div className='card-body'>
                           <h3 className='card-title'>
                              <a href='tour-details.html'>Empire State Building Admission</a>
                           </h3>
                           <p className='card-meta'>124 E Huron St, New york</p>
                           <div className='card-rating'>
                              <span className='badge text-white'>4.4/5</span>
                              <span className='review__text'>Average</span>
                              <span className='rating__text'>(30 Reviews)</span>
                           </div>
                           <div className='card-price d-flex align-items-center justify-content-between'>
                              <p>
                                 <span className='price__num'>$124.00</span>
                              </p>
                              <a href='tour-details.html' className='btn-text'>
                                 View details
                                 <i className='la la-angle-right' />
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* end card-item */}
                  </div>
                  {/* end col-lg-4 */}
                  <div className='col-lg-4 responsive-column'>
                     <div className='card-item trending-card'>
                        <div className='card-img'>
                           <a href='tour-details.html' className='d-block'>
                              <img src='images/img10.jpg' alt='Destination-img' />
                              <span className='badge badge-ribbon'>Save 24%</span>
                           </a>
                        </div>
                        <div className='card-body'>
                           <h3 className='card-title'>
                              <a href='tour-details.html'>Hut on Blue Water Beach Tour</a>
                           </h3>
                           <p className='card-meta'>124 Nevada, Las Vegas</p>
                           <div className='card-rating'>
                              <span className='badge text-white'>4.4/5</span>
                              <span className='review__text'>Superb</span>
                              <span className='rating__text'>(30 Reviews)</span>
                           </div>
                           <div className='card-price d-flex align-items-center justify-content-between'>
                              <p>
                                 <span className='price__num'>$100.00</span>
                                 <span className='price__num before-price color-text-3'>$124.00</span>
                              </p>
                              <a href='tour-details.html' className='btn-text'>
                                 View details
                                 <i className='la la-angle-right' />
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* end card-item */}
                  </div>
                  {/* end col-lg-4 */}
                  <div className='col-lg-4 responsive-column'>
                     <div className='card-item trending-card'>
                        <div className='card-img'>
                           <a href='tour-details.html' className='d-block'>
                              <img src='images/img11.jpg' alt='Destination-img' />
                           </a>
                           <span className='badge'>Featured</span>
                        </div>
                        <div className='card-body'>
                           <h3 className='card-title'>
                              <a href='tour-details.html'>Golden Gate Seaplane Tour</a>
                           </h3>
                           <p className='card-meta'>124 E Huron St, New york</p>
                           <div className='card-rating'>
                              <span className='badge text-white'>4.4/5</span>
                              <span className='review__text'>Good</span>
                              <span className='rating__text'>(30 Reviews)</span>
                           </div>
                           <div className='card-price d-flex align-items-center justify-content-between'>
                              <p>
                                 <span className='price__num'>$124.00</span>
                              </p>
                              <a href='tour-details.html' className='btn-text'>
                                 View details
                                 <i className='la la-angle-right' />
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* end card-item */}
                  </div>
                  {/* end col-lg-4 */}
               </div>
               {/* end row */}
            </div>
            {/* end container */}
         </section>
      </ImpTourDetailStyled>
   );
}

export default connect(
   (state) => ({
      user: state["authUser"].user
   }),
   {
      getTours: appApisActions.getTours
   }
)(ImpTourDetail);

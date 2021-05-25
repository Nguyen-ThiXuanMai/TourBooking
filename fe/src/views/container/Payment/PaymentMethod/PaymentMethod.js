import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { connect } from "react-redux";
import { appApisActions } from "~/state/ducks/appApis/index";
import "pure-react-carousel/dist/react-carousel.es.css";
import queryString from "query-string";
import { message } from "antd";
import * as PATH from "~/configs/routesConfig";
import { parseObjToQuery } from "~/views/utilities/helpers";
import { useHistory, useParams } from "react-router";
   
const PaymentMethodStyled = styled.div``;

function PaymentMethod(props) {
   const params = queryString.parse(window.location.search);
   const [paymentMethod, setPaymentMethod] = useState("");
   const [linkMomo, setLinkMomo] = useState("");
   const [PIN, setPIN] = useState(Date.now());
   const history = useHistory();

   useEffect(() => {
      if (props.payment?.price > 0) {
         const body = {
            order: {
               PIN,
               numberPeople: params.numberPeople,
               email: props.user?.email
            },
            tour: {
               price: props.payment?.price,
               sale: props.payment?.sale
            }
         };
         props.getLinkMoMo(body).then(({ res }) => {
            setLinkMomo(res);
         });
      }
   }, [props.payment?.price]);

   const submitTransfer = () => {
      const body = {
         PIN, 
         // status: ORDER_
      }
   }

   const renderPaymentMethod = () => {
      switch (paymentMethod) {
         case "MOMO":
            return (
               <div
                  className='tab-pane fade show active'
                  id='credit-card'
                  role='tabpanel'
                  aria-labelledby='credit-card-tab'>
                  <div className='contact-form-action'>
                     <form method='post'>
                        <div className='row'>
                           <div className='col-lg-12'>
                              <div className='btn-box'>
                                 <a
                                    className='theme-btn'
                                    type='submit'
                                    href={linkMomo?.data?.payUrl}
                                    onClick={submitTransfer}>
                                    Thanh toán ngay
                                 </a>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            );
         case "Cash":
            return (
               <div
                  className='tab-pane fade show active'
                  id='credit-card'
                  role='tabpanel'
                  aria-labelledby='credit-card-tab'>
                  <div className='contact-form-action'>
                     <div className='row'>
                        <div className='col-lg-12 responsive-column mb-4'>Bạn sẽ thanh toán tại với đại lý du lịch</div>
                        <div className='col-lg-12'>
                           <div className='btn-box'>
                              <button className='theme-btn' onClick={submitTransfer}>
                                 Hoàn tất
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            );
         case "Transfer":
            return (
               <div
                  className='tab-pane fade show active'
                  id='credit-card'
                  role='tabpanel'
                  aria-labelledby='credit-card-tab'>
                  <div className='contact-form-action'>
                     <div>
                        <div className='row'>
                           <div className='col-lg-6 responsive-column'>
                              <div className='input-box'>
                                 <label className='label-text'>Ngân hàng</label>
                                 <div className='form-group'>
                                    <span style={{ fontWeight: 700 }}>VIETCOMBANK</span>
                                 </div>
                              </div>
                           </div>
                           <div className='col-lg-6 responsive-column'>
                              <div className='input-box'>
                                 <label className='label-text'>Tên tài khoản</label>
                                 <div className='form-group'>
                                    <span style={{ fontWeight: 700 }}>Travel Project</span>
                                 </div>
                              </div>
                           </div>
                           <div className='col-lg-6 responsive-column'>
                              <div className='input-box'>
                                 <label className='label-text'>Số tài khoản</label>
                                 <div className='form-group'>
                                    <span style={{ fontWeight: 700 }}>123 456 7894 123</span>
                                 </div>
                              </div>
                           </div>
                           <div className='col-lg-6 responsive-column'>
                              <div className='input-box'>
                                 <label className='label-text'>Tại ngân hàng</label>
                                 <div className='form-group'>
                                    <span style={{ fontWeight: 700 }}>
                                       Ngân hàng TMCP Ngoại thương Việt Nam, Sở giao dịch
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className='col-lg-12'>
                              <div className='btn-box'>
                                 <button className='theme-btn' onClick={submitTransfer}>
                                    Hoàn tất
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            );
         default:
            break;
      }
   };

   return (
      <PaymentMethodStyled>
         <div className='form-box'>
            <div className='form-title-wrap'>
               <h3 className='title'>Chọn phương thức thanh toán</h3>
            </div>
            {/* form-title-wrap */}
            <div className='form-content'>
               <div className='section-tab check-mark-tab text-center pb-4'>
                  <ul className='nav nav-tabs justify-content-center' id='myTab' role='tablist'>
                     <li className='nav-item'>
                        <a
                           className={`nav-link ${paymentMethod === "MOMO" ? "active" : ""}`}
                           id='credit-card-tab'
                           data-toggle='tab'
                           href='#1'
                           role='tab'
                           aria-controls='credit-card'
                           aria-selected='false'>
                           <i className='la la-check icon-element' />
                           <img src='/images/MoMo_Logo.png' width='100px' height='100px' alt='' />
                           <span className='d-block pt-2'>MOMO</span>
                        </a>
                     </li>
                     <li className='nav-item'>
                        <a
                           className={`nav-link ${paymentMethod === "Transfer" ? "active" : ""}`}
                           id='paypal-tab'
                           data-toggle='tab'
                           href='#1'
                           role='tab'
                           aria-controls='paypal'
                           aria-selected='true'>
                           <i className='la la-check icon-element' />
                           <img width='100px' height='100px' src='/images/transfer-logo.jpg' alt='' />
                           <span className='d-block pt-2'>Chuyển khoản</span>
                        </a>
                     </li>
                     <li className='nav-item'>
                        <a
                           className={`nav-link ${paymentMethod === "Cash" ? "active" : ""} `}
                           id='payoneer-tab'
                           data-toggle='tab'
                           href='#1'
                           role='tab'
                           aria-controls='payoneer'
                           aria-selected='true'>
                           <i className='la la-check icon-element' />
                           <img alt='' src='/images/cash-logo.jpg' width='100px' height='100px' />
                           <span className='d-block pt-2'>Tiền mặt</span>
                        </a>
                     </li>
                  </ul>
               </div>
               {/* end section-tab */}
               {/* end tab-content */}
            </div>
            {/* end form-content */}
         </div>
      </PaymentMethodStyled>
   );
}

export default connect(
   (state) => ({
      user: state["authUser"].user
   }),
   {
      getTours: appApisActions.getTours,
      getLinkMoMo: appApisActions.getLinkMoMo,
      createOrder: appApisActions.createOrder
   }
)(PaymentMethod);

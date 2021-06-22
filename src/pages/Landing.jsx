import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Pancake from '../assets/pancake-swap.png';
import Chainlink from "../assets/chainlink.svg";
import Partner1 from "../assets/partner-1.png";
import logoDark from "../assets/logo-horizontal-dark.png";
import logoHorizontal from "../assets/logo-horizontal.png";
import scMediumA from "../assets/sc-medium-a.png";
import scMediumW from "../assets/sc-medium-w.png";
import GfxE from "../assets/gfx-e.png";
import User from "../assets/user.jpg";
import JasperByun from "../assets/JASPER_BYUN.jpeg";
import BlocksyncLogo from "../assets/blocksync-logo.png";
import X21 from "../assets/x21.png";
import LesterLtm from "../assets/LESTER_LIM.jpeg";
import Exchange from "../assets/exchange.png";
import Exntc from "../assets/exntc.png";
import ExnetworkCapital from "../assets/exnetwork_capital.jpg";
import Yield from "../assets/yield.png";
import TimFrost from "../assets/TIM_FROST.jpg";
import Innovion from "../assets/innovion.png";
import Metamask from "../assets/metamask.svg";
import Help1 from "../assets/help-1.png";
import Help2 from "../assets/help-2.png";
import Help3 from "../assets/help-3.png";
import Help4 from "../assets/help-4.png";
import TrustPlatform from "../assets/trust_platform.png";

const Landing = () => {
   return (
      <body className="darkmode" data-new-gr-c-s-check-loaded="14.1006.0" data-gr-ext-installed="">
         <div id="root">
            <Header />

            <div className="pp-homepage">
               <div className="pp-home-banner">
                  <div className="container">
                     <h1 className="text-center text-uppercase" data-aos="fade-up" data-aos-delay="100">Shield Network Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                     <Row className="justify-content-center">
                        <div className="col-md-8">
                           <p data-aos="fade-up" data-aos-delay="200">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                     </Row>
                     <div className="mt-4">
                        <a data-aos="fade-up" data-aos-delay="300" className="btn btn-primary btn-lg me-3" href="https://www.google.com/">View all Projects</a>
                        <a target="_blank" className="btn btn-primary btn-pancake btn-lg btn-buy-on me-3" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700">
                        <b className="d-flex align-items-center justify-content-center" style={{whiteSpace: 'nowrap'}}>Buy on&nbsp;<img src={Pancake} height="20" />&nbsp;Pancake Swap</b></a>
                        <a data-aos="fade-up" data-aos-delay="400" className="btn btn-primary btn-lg me-3" href="https://forms.gle/rLU29wn6RwPDWKLm7" target="_blank">Apply for IDO</a>
                     </div>
                     <div className="mt-5 text-center">
                        <a className="btn btn-outline-primary btn-sm" href="https://www.google.com/" target="_blank">
                        <i className="fas fa-paper-plane me-1"></i>
                        <span>Join us on Telegram</span>
                        </a>
                        <a className="btn btn-outline-primary btn-sm mx-3" href="https://www.google.com/" target="_blank">
                        <i className="fab fa-medium-m me-1"></i>
                        <span>Follow our Medium</span>
                        </a>
                        <a className="btn btn-outline-primary btn-sm" href="https://www.google.com/" target="_blank">
                        <i className="fab fa-twitter me-1"></i>
                        <span>Follow our Twitter</span>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="pp-home-partners">
                  <div className="container">
                     <div className="pp-home-partners-content d-flex align-items-center justify-content-center">
                        <h6 className="mb-0 text-end">Our Partners</h6>
                        <a className="me-4 mb-2 mb-lg-0" target="_blank" href="https://chain.link/" style={{color: 'rgb(42, 90, 218)'}}>
                        <img height="48" src={Chainlink} alt="partner" /></a>
                        <a target="_blank" href="https://ferrum.network/">
                        <img height="48" src={Partner1} alt="partner" /></a>
                        <a target="_blank" href="https://bondly.finance/"><img className="dark-show" height="48" src={logoDark} alt="partner" />
                        <img className="light-show" height="48" src={logoHorizontal} alt="partner" /></a>
                     </div>
                  </div>
               </div>

               <div className="pp-home-about pp-section" id="about">
                  <div className="container">
                     <Row className="justify-content-center text-center">
                        <div className="col-lg-6">
                           <div className="section-head">
                              <h2 className="title title-xl">ABOUT US</h2>
                           </div>
                        </div>
                     </Row>
                  </div>
                  <div className="pp-home-about-content pp-section-body mt-4">
                     <div className="container">
                        <Row className="align-items-center">
                           <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                              <h6>WHAT IS SHIELD NETWORK?</h6>
                              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                              <p className="lead-s2">BLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <h6 className="mt-4">WHY CHOOSE US?</h6>
                              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <b>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</b>, sed quia consequuntur <b>magni dolores eos qui ratione voluptatem sequi nesciunt.</b>. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. <b><i>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</i></b></p>
                              <p>Quis autem vel eum iure reprehenderit qui in ea voluptate <b>velit esse quam nihil molestiae consequatur</b>. vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                           </div>
                           <div className="col-md-6">
                              <div className="nk-block-img nk-block-ca" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative'}}>
                                 <div className="nk-circle-animation nk-df-center fast"></div>
                                 <img className="shadow rounded w-100 dark-show" src={scMediumA} alt="" /><img className="shadow rounded w-100 light-show" src={scMediumW} alt="" />
                              </div>
                           </div>
                        </Row>
                     </div>
                  </div>
               </div>
               <div className="pp-home-how-it-work pp-section pt-3" id="how-it-work">
                  <div className="container">
                     <Row className="justify-content-center text-center">
                        <div className="col-lg-8">
                           <div className="section-head">
                              <h2 className="title title-xl" data-aos="fade-up" data-aos-delay="100" title="">THE SHIELD NETWORK TIERED SYSTEM</h2>
                              <p data-aos="fade-up" data-aos-delay="200" className="mt-3">The Shield Network will showcase a fixed tier system based on the number of tokens held.</p>
                           </div>
                        </div>
                     </Row>
                  </div>
                  <div className="pp-home-how-it-work-content pp-section-body">
                     <div className="container">
                        <div className="text-center mb-5">
                           <h3 className="text-uppercase" data-aos="fade-up" data-aos-delay="300"><b>Round 1 - Allocation Round</b></h3>
                        </div>
                        <Row className="mb-3">
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                              <div className="pricing-table text-center">
                                 <Row className="">
                                    <div className="col-12">
                                       <p className="bold price-header"><h3 className="text-warning">Guardian Launch</h3></p>
                                       <p className="bold price-header"><h2 className="text-warning">Tier 1</h2></p>
                                    </div>
                                    <div className="col-12">
                                       <hr />
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">All token projects launched in Tier 1 are guaranteed by Shield to be 100% safe.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Projects will be required to have their lead developer undergo KYC verification to Shield.</p><br/>
                                    </div>
                                    <div className="col-12">
                                           <p className="light thin mb-0">Projects will be audited and deployed by Shield.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Projects will have development funds held by Shield.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Shield will provide 24/7 developer support and a marketing manager for project launches.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Tier 1 projects will only be accessible to new investors who hold a minimum (to be determined closer to launch) number of Shield Network tokens.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                       <hr />
                                    </div>
                                    <div className="col-12"><a href="https://www.google.com/" target="blank" className="btn btn-primary btn-lg">Learn more</a></div>
                                 </Row>
                              </div>
                           </div>
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                              <div className="pricing-table text-center">
                                 <Row className="">
                                    <div className="col-12">
                                       <p className="bold price-header"><h3 className="text-warning">Audited Launch</h3></p>
                                       <p className="bold price-header"><h2 className="text-warning">Tier 2</h2></p>
                                    </div>
                                    <div className="col-12">
                                       <hr />
                                    </div>
                                    <div className="col-12">
                                        <p className="light thin mb-0">All token projects launched in Tier 2 are meticulously and methodically audited by Shield.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Projects will be required to have their lead developer undergo KYC verification to Shield.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Project audits will ensure that the contract is safe and the tokenomics work as marketed.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Projects will have time-locked development funds to prevent "liquidity stripping".</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">Tier 2 projects will only be accessible to new investors who hold a minimum (to be determined closer to launch) number of Shield Network tokens.</p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0"></p><br/>
                                    </div>

                                      <div className="col-12">
                                       <p className="light thin mb-0"></p><br/>
                                    </div>
                                   
                                     <div className="col-12">
                                       <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                       <hr />
                                    </div>
                                    <div className="col-12"><a href="https://www.google.com/" target="blank" className="btn btn-primary btn-lg">Learn more</a></div>
                                 </Row>
                              </div>
                           </div>
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                              <div className="pricing-table text-center">
                                 <Row className="">
                                    <div className="col-12">
                                       <p className="bold price-header"><h3 className="text-warning">Decentralized Launch</h3></p>
                                       <p className="bold price-header"><h2 className="text-warning">Tier 3</h2></p>
                                    </div>
                                    <div className="col-12">
                                       <hr />
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0">All token projects launched in Tier 3 are completely decentralized. Shield recommends that potential investors do their own research before investing.</p><br/>
                                    </div>
                                    <div className="col-12">          	
                                       <p className="light thin mb-0">Projects will have 50% of listing fees used for Shield Network development and 50% of listing fees used for buying/burning Shield Network tokens.</p><br/>
                                    </div>
                                    <div className="col-12">
                                        <p className="light thin mb-0">Tier 3 projects are open to all new investors with no minimum required holding of Shield Network tokens.</p><br/>
                                    </div>
                                    <div className="col-12">
                                        <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                      <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                      <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                       <p className="light thin mb-0"></p><br/>
                                    </div>
                                    <div className="col-12">
                                       <hr />
                                    </div>
                                    <div className="col-12"><a href="https://www.google.com/" target="blank" className="btn btn-primary btn-lg">Learn more</a></div>
                                 </Row>
                              </div>
                           </div>
                        
                          
                        <p className="text-center">In the first round, called the “Allocation Round”, users can purchase the amount allotted to them based on their tier.</p>
                        <div className="text-center mb-5 mt-5">
                           <h3 className="text-uppercase"><b>Round 2 - FCFS ROUND</b></h3>
                        </div>
                        <Row className="mb-5 align-items-center">
                           <div className="col-md-6" data-aos="fade-up" data-aos-delay="100"><img src={GfxE} className="w-100" /></div>
                           <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                              <p className="mt-3"><b className="how-it-work-heading">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b></p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                           </div>
                        </Row>
                     </Row>
                  </div>
               </div>
               <div className="pp-home-advisors pp-section py-3" id="advisor">
                  <div className="container">
                     <Row className="justify-content-center text-center">
                        <div className="col-lg-6">
                           <div className="section-head">
                              <h2 className="title title-xl" data-aos="fade-up" data-aos-delay="100" title="">OUR TEAM</h2>
                              <p data-aos="fade-up" data-aos-delay="200" className="mt-3">Our core team members.</p>
                           </div>
                        </div>
                     </Row>
                  </div>
                  <div className="pp-home-advisors-content pp-section-body">
                     <div className="container">
                        <Row className="justify-content-center">
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-1" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">JASPER BYUN</h5>
                                 <span className="team-position">Founder<br />at Blocksync Ventures</span>
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-telegram"></em></a></li>
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-linkedin-in"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-2" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">LESTER LIM</h5>
                                 <span className="team-position">Founder<br />at X21 Digital</span>
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-telegram"></em></a></li>
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-twitter"></em></a></li>
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-linkedin-in"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-3" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">IAN FRIEND</h5>
                                 <span className="team-position">Co-Founder and COO<br />at Ferrum Network</span>
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.linkedin.com/in/ian-friend-bb949657/"><em className="fab fa-linkedin-in"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-4" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">DANISH CHAUDHRY</h5>
                                 <span className="team-position" style={{minHeight: '5.5rem'}}>CEO at Bitcoin.com Exchange – Entrepreneur, Startup Advisor, Mentor and Investor</span>
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-twitter"></em></a></li>
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-linkedin-in"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" height="184px" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-5" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">EXNETWORK CAPITAL</h5>
                                 <span className="team-position" style={{minHeight: '5.5rem'}}>Exnetwork Capital is an investment firm focused on funding and incubating blockchain projects.</span>
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-twitter"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" height="184px" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-6" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">TIM FROST</h5>
                                 <span className="team-position" style={{minHeight: '5.5rem'}}>CEO and co-founder<br />of YIELD App</span><br />
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-twitter"></em></a></li>
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-linkedin-in"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" height="184px" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-6" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">TIM FROST</h5>
                                 <span className="team-position" style={{minHeight: '5.5rem'}}>CEO and co-founder<br />of YIELD App</span><br />
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-twitter"></em></a></li>
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-linkedin-in"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                         <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                              <div className="team team-s5">
                                 <div className="team-photo team-photo-s1"><img src={User} alt="team" className="no-bdrs" height="184px" /><a href="https://www.google.com/" data-bs-toggle="modal" data-bs-target="#team-popup-6" className="team-show content-popup" data-overlay="bg-grad-alt"></a></div>
                                 <h5 className="team-name title title-md">TIM FROST</h5>
                                 <span className="team-position" style={{minHeight: '5.5rem'}}>CEO and co-founder<br />of YIELD App</span><br />
                                 <ul className="team-social team-social-vr team-social-s2">
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-twitter"></em></a></li>
                                    <li><a target="_blank" href="https://www.google.com/"><em className="fab fa-linkedin-in"></em></a></li>
                                 </ul>
                              </div>
                           </div>
                        </Row>
                     </div>
                  </div>
               </div>
               <div className="pp-home-contact pp-section py-5" id="contact">
                  <div className="container">
                     <Row className="justify-content-center text-center">
                        <div className="col-lg-6">
                           <div className="section-head">
                              <h2 className="title title-xl" data-aos="fade-up" data-aos-delay="100" title="">CONTACT</h2>
                           </div>
                        </div>
                     </Row>
                  </div>
                  <div className="pp-home-contact-content pp-section-body mt-5">
                     <div className="container">
                        <Row className="justify-content-center align-items-center gutter-vr-50px">
                           <div className="col-lg-5 text-center order-lg-first">
                              <div className="nk-block-contact nk-block-contact-s1" data-aos="fade-up" data-aos-delay="100">
                                 <ul className="contact-list ps-1">
                                    <li data-aos="fade-up" data-aos-delay="300">
                                       <em className="contact-icon fas fa-headset"></em>
                                       <div className="contact-text"><a href="mailto:support@shieldnetwork.com"><span>support@shieldnetwork.com</span></a></div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="400">
                                       <em className="contact-icon fas fa-paper-plane"></em>
                                       <div className="contact-text"><a href="https://www.google.com/" target="_blank"> <span>Join us on Telegram</span></a></div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="400">
                                       <em className="contact-icon fab fa-twitter"></em>
                                       <div className="contact-text"><a href="https://www.google.com/" target="_blank"> <span>Follow our Twitter</span></a></div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="500">
                                       <em className="contact-icon fas fa-globe"></em>
                                       <div className="contact-text"><span>https://www.google.com/</span></div>
                                    </li>
                                 </ul>
                                 <div className="nk-circle-animation nk-df-center white small"></div>
                              </div>
                           </div>
                        </Row>
                     </div>
                  </div>
               </div>
               </div>

               <div className="modal fade" id="team-popup-1" tabindex="-1" aria-labelledby="team-popup-1Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                  <div className="modal-dialog modal-lg modal-dialog-centered pp-modal-team">
                     <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                           <Row className="mb-3">
                              <div className="col-md-6 text-center">
                                 <div className="mb-3 pe-md-3"><img src={JasperByun} alt="team" className="no-bdrs w-100 borras" /></div>
                                 <p className="mb-1"><img src={BlocksyncLogo} alt="team" className="no-bdrs" height="40" /></p>
                                 <p><a target="_blank" href="https://blocksync.com/">https://blocksync.com</a></p>
                              </div>
                              <div className="col-md-6">
                                 <h3>JASPER BYUN</h3>
                                 <p style={{opacity: '0.6'}}>Founder of Blocksync Ventures</p>
                                 <p><a className="me-3" target="_blank" href="https://au.linkedin.com/in/jasperb"><em className="fab fa-linkedin-in"></em></a><a className="me-3" target="_blank" href="https://t.me/JasperBV"><em className="fab fa-telegram"></em></a></p>
                                 <hr />
                                 <p>Jasper is the founder of Blocksync Ventures and a managing partner at Brilliance Ventures. He has been working with start-ups for over 5 years and has coordinated investments exceeding $50M into world-class distributed technologies projects.</p>
                                 <p>He has also guided advisory portfolios to establish key strategic initiatives by securing partnerships, ensuring proper marketing direction, and encompassing overall day-to-day operations.</p>
                              </div>
                           </Row>
                           <p>We truly believe BSCPAD investors will benefit from this partnership as we can lean on Jasper’s extensive Fintech background and expertise.</p>
                           <p className="mb-0">Jasper is the first of many partners to be revealed in the upcoming days so keep an eye on the BSCPAD telegram channel for future updates!</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade" id="team-popup-2" tabindex="-1" aria-labelledby="team-popup-2Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                  <div className="modal-dialog modal-lg modal-dialog-centered pp-modal-team">
                     <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                           <Row className="mb-3">
                              <div className="col-md-6 text-center">
                                 <div className="mb-3 pe-md-3"><img src={LesterLtm} alt="team" className="no-bdrs w-100 borras" /></div>
                                 <p className="mb-1"><img src={X21} alt="team" className="no-bdrs" height="40" /></p>
                                 <p><a target="_blank" href="https://x21digital.com/">https://x21digital.com</a></p>
                              </div>
                              <div className="col-md-6">
                                 <h3>LESTER LIM</h3>
                                 <p style={{opacity: '0.6'}}>Founder at X21 Digital</p>
                                 <p><a className="me-3" target="_blank" href="https://sg.linkedin.com/in/lesterlim15"><em className="fab fa-linkedin-in"></em></a><a className="me-3" target="_blank" href="https://t.me/Lesterlim15"><em className="fab fa-telegram"></em></a><a className="me-3" target="_blank" href="https://twitter.com/lesterlim15?lang=en"><em className="fab fa-twitter"></em></a></p>
                                 <hr />
                                 <p>Lester is the founder of X21 Digital. He incubates and supports promising projects via his marketing experience &amp; vast connections within the blockchain ecosystem. His latest incubation projects include Blank Wallet, DAOventures and Vortex Defi.</p>
                                 <p>He focuses on strategic directions, token metrics, and connecting the dots as a Strategic Advisor to other projects by bringing in the RIGHT connections and resources to shortcut their success.</p>
                              </div>
                           </Row>
                           <p>Also Strategic Advisor to PolkaFoundry, Oddz, Project Inverse, MahaDao &amp; Finxflo.</p>
                           <p className="mb-0">The BSCPAD team and Lester both share a common love of Blockchain Technology – and are excited to leverage his vast connections to bring mass exposure to BSCPAD. We are excited to be a part of the exclusive X21 Digital portfolio and join the other prestigious projects who have benefited from Lester’s guidance.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade" id="team-popup-3" tabindex="-1" aria-labelledby="team-popup-3Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                  <div className="modal-dialog modal-lg modal-dialog-centered pp-modal-team">
                     <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                           <Row className="mb-3">
                              <div className="col-md-6 text-center">
                                 <div className="mb-3 pe-md-3"><img src={User} alt="team" className="no-bdrs w-100 borras" /></div>
                                 <p className="mb-1"><img src={Partner1} alt="team" className="no-bdrs" height="40" /></p>
                                 <p><a target="_blank" href="https://ferrum.network/">https://ferrum.network/</a></p>
                              </div>
                              <div className="col-md-6">
                                 <h3>IAN FRIEND</h3>
                                 <p style={{opacity: '0.6'}}>Co-Founder and COO at Ferrum Network</p>
                                 <p><a className="me-3" target="_blank" href="https://www.linkedin.com/in/ian-friend-bb949657"><em className="fab fa-linkedin-in"></em></a></p>
                                 <hr />
                                 <p>Ian Friend is the Co-Founder and COO at Ferrum Network. </p>
                              </div>
                           </Row>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade" id="team-popup-4" tabindex="-1" aria-labelledby="team-popup-3Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                  <div className="modal-dialog modal-lg modal-dialog-centered pp-modal-team">
                     <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                           <Row className="mb-3">
                              <div className="col-md-6 text-center">
                                 <div className="mb-3 pe-md-3"><img src={User} alt="team" className="no-bdrs w-100 borras" /></div>
                                 <p className="mb-1"><img src={Exchange} alt="team" className="no-bdrs" style={{maxWidth: '250px', maxHeight: '40px'}} /></p>
                                 <p><a target="_blank" href="https://exchange.bitcoin.com/">https://exchange.bitcoin.com/</a></p>
                              </div>
                              <div className="col-md-6">
                                 <h3>DANISH CHAUDHRY</h3>
                                 <p style={{opacity: '0.6'}}>CEO at Bitcoin.com Exchange – Entrepreneur, Startup Advisor, Mentor and Investor</p>
                                 <p><a className="me-3" target="_blank" href="https://www.linkedin.com/in/djchaudhry/"><em className="fab fa-linkedin-in"></em></a><a className="me-3" target="_blank" href="https://twitter.com/djchaudhry_"><em className="fab fa-twitter"></em></a></p>
                                 <hr />
                                 <p>Danish Chaudhry is the CEO of Bitcoin.com Exchange (https://exchange.bitcoin.com/), an up and coming exchange that focuses on bringing the most promising projects to market. He is an active investor and advisor, having backed some of the most prominent projects out there from an early stage such as matic (now polygon), marlin, cere, moonbeam, sifchain, flow, graph and the list goes on.</p>
                                 <p>Danish has been in the blockchain space since the early days. He has a background in finance where he was a PM at Blackrock for a number of years, having founded and successfully exited two startups, he's built fintech and insurtech incubators at his previous VC that have produced startups valued at over $2bn.</p>
                              </div>
                           </Row>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade" id="team-popup-5" tabindex="-1" aria-labelledby="team-popup-3Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                  <div className="modal-dialog modal-lg modal-dialog-centered pp-modal-team">
                     <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                           <Row className="mb-3">
                              <div className="col-md-6 text-center">
                                 <div className="mb-3 pe-md-3"><img src={Exntc} alt="team" className="no-bdrs w-100 borras" /></div>
                                 <p className="mb-1"><img src={ExnetworkCapital} alt="team" className="no-bdrs" height="40" /></p>
                                 <p><a target="_blank" href="https://exnetworkcapital.com/">https://exnetworkcapital.com</a></p>
                              </div>
                              <div className="col-md-6">
                                 <h3>EXNETWORK CAPITALY</h3>
                                 <p style={{opacity: '0.6'}}>Exnetwork Capital is an investment firm focused on funding and incubating blockchain projects. It is composed of a DAO of different investors all helping out to ensure the portfolio companies' success.</p>
                                 <p><a className="me-3" target="_blank" href="https://twitter.com/exnetworkcap"><em className="fab fa-twitter"></em></a></p>
                                 <hr />
                                 <p>Exnetwork Capital's incubator program will help mentor BSCPAD and provide support from their network of entrepreneurs who will help take the BSC Launch Pad to new levels. Exnetwork primarily focuses on the decentralized market and can assist with many areas such as token design, fundraising, and marketing. New projects entering the launchpad will be able to glean much knowledge from the Exnetwork Capital team. </p>
                                 <p>We are aligned in supporting the creation and launching of new projects. We aim to help these new BSC projects to succeed and garner the same attention, hype and love as their erc counterparts.</p>
                              </div>
                           </Row>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade" id="team-popup-6" tabindex="-1" aria-labelledby="team-popup-6Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                  <div className="modal-dialog modal-lg modal-dialog-centered pp-modal-team">
                     <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                           <Row className=" mb-3">
                              <div className="col-md-6 text-center">
                                 <div className="mb-3 pe-md-3"><img src={TimFrost} alt="team" className="no-bdrs w-100 borras" /></div>
                                 <p className="mb-1"><img src={Yield} alt="team" className="no-bdrs" height="40" /></p>
                                 <p><a target="_blank" href="https://www.yield.app/">https://www.yield.app</a></p>
                              </div>
                              <div className="col-md-6">
                                 <h3>TIM FROST</h3>
                                 <p style={{opacity: '0.6'}}>Tim Frost is CEO and co-founder of YIELD App which is one of the fastest growing fintech companies in the crypto space. He has extensive experience in FinTech, marketing, business development, and operations. YIELD App is the third digital finance platform Tim has brought to the market. He was a founding member of the Wirex team and supported operations, business development, and marketing for the first 18 months. Tim also helped bring EQI Bank to the global market as a digital challenger to conventional banking, with an average client AUM of $250,000. Tim's experience in blockchain technology includes early involvement with numerous successful projects including QTUM, NEO, Paxful, Polymath, Selfkey and Everex. Tim has been building crypto and fintech companies since 2014.</p>
                                 <p><a className="me-3" target="_blank" href="https://hk.linkedin.com/in/timfrost55"><em className="fab fa-linkedin-in"></em></a><a className="me-3" target="_blank" href="https://twitter.com/TimYIELD"><em className="fab fa-twitter"></em></a></p>
                                 <hr />
                                 <p>Adding Tim Frost as a strategic partner and advisor reinforces our commitment to aggressive growth for BSCPAD. Tim will help lead our efforts with his vast experience in FinTech, marketing, business development, and operations. We will be utilizing his expertise in these areas to help lead to even higher customer adoption and expansion into new industry verticals with BSCPAD.</p>
                              </div>
                           </Row>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade" id="team-popup-8" tabindex="-1" aria-labelledby="team-popup-8Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                  <div className="modal-dialog modal-lg modal-dialog-centered pp-modal-team">
                     <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                           <Row className="mb-3">
                              <div className="col-md-6 text-center">
                                 <div className="mb-3 pe-md-3"><img src={Innovion} alt="team" className="no-bdrs w-100 borras" /></div>
                                 <p className="mb-1"><img src={Innovion} alt="team" className="no-bdrs" height="40" /></p>
                                 <p><a target="_blank" href="https://www.google.com/">https://innovion.co</a></p>
                              </div>
                              <div className="col-md-6">
                                 <h3>INNOVION</h3>
                                 <p style={{opacity: '0.6'}}>Innovion has built a prestigious reputation with a unique approach to guerilla marketing, collaborating with over 200 blockchain projects.</p>
                                 <p><a className="me-3" target="_blank" href="https://www.google.com/"><em className="fab fa-linkedin-in"></em></a></p>
                                 <hr />
                                 <p>Innovion will strengthen our Public reach and further grow our client base.</p>
                              </div>
                           </Row>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="tsparticles">
                  <canvas className="tsparticles-canvas-el" width="1274" height="6186" style={{width: '100%', height: '100%', pointerEvents: 'initial'}}></canvas>
               </div>
               <div className="pp-footer">
                  <div className="container">
                     <div className="d-flex justify-content-between">
                        <div className="text-muted"> Copyright © 2021. All Rights Reserved by Shield Network</div>
                        <div className="text-muted"> v1.1.2</div>
                        <div className="text-right pp-footer-link"><a target="_blank" href="https://www.google.com/">Privacy Policy </a><a target="_blank" href="https://www.google.com/">Terms of Use </a></div>
                     </div>
                  </div>
               </div>
               <div className="modal fade" id="connectWalletModal" tabindex="-1" aria-labelledby="connectWalletModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-sm">
                     <div className="modal-content">
                        <div className="modal-header">
                           <h6 className="modal-title text-dark" id="connectWalletModalLabel">Connect to wallet</h6>
                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0">
                           <div className="c-list border-b px-3 py-2 d-flex align-items-center" data-bs-dismiss="modal">
                              <img src={Metamask} width="30px" className="me-2" />
                              <div className="text-dark">Metamask - <span className="font-weight-bold">Desktop</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade in" id="helpModal" tabindex="-1" aria-labelledby="helpModalLabel">
                  <div className="modal-dialog modal-dialog-centered">
                     <div className="modal-content modal-content text-white modal-help" style={{backgroundColor: 'rgb(26, 26, 26)'}}>
                        <div className="modal-header"><button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close" style={{filter: 'invert(1)'}}></button></div>
                        <div className="modal-body">
                           <div className="d-flex mb-3"><a className="btn btn-info me-2 w-100 text-white text-center" href="https://link.trustwallet.com/open_url?coin_id=56&amp;url=https://bscpad.com/">Open with <img src={TrustPlatform} width="30px" className="me-2" /></a></div>
                           <h2 className="text-warning">How to Set Up and Use Trust Wallet for BSCPAD.COM</h2>
                           <h5 className="mt-3">Setting up your wallet for Binance Smart Chain</h5>
                           <ul className="ps-0" style={{listStyle: 'none'}}>
                              <li>1). Download Trust Wallet. If you already have Trust Wallet, make sure your app is up to date.</li>
                              <li>2). Complete <a href="https://community.trustwallet.com/t/how-to-create-a-multi-coin-wallet/41" target="_blank">basic setup of a multi-coin wallet</a>. Remember to save your backup phrases.</li>
                              <li>3). Go to your Smart Chain wallet and press receive to find your address</li>
                              <li>4). That’s it! You’re ready to start using Binance Smart Chain</li>
                           </ul>
                           <h5 className="mt-4">Using BSCPAD.COM in Trust Wallet</h5>
                           <ul className="ps-0" style={{listStyle: 'none'}}>
                              <li>5). For this part, iOS users will need the Dapp browser. Android users have the Dapp browser by default.</li>
                              <li>6). Once you’ve topped up your wallet, open the Dapp browser by pressing on the four squares at the bottom of the app.</li>
                           </ul>
                           <p className="text-center"><img className="mx-auto" src={Help1} alt="" style={{maxWidth: '97%'}} /></p>
                           <ul className="ps-0" style={{listStyle: 'none'}}>
                              <li>7). Input <b>bscpad.com</b></li>
                              <li>8). Change network to Binance smart chain</li>
                              <li>9). Use the Dapp and have fun!</li>
                           </ul>
                           <h5 className="mt-5">Enable DApp Browser on Trust Wallet (iOS version)</h5>
                           <ul className="ps-0" style={{listStyle: 'none'}}>
                              <li>
                                 <p>1). Open&nbsp;<b>Safari Browser</b>&nbsp;and then type in the URL:&nbsp;<b>trust://browser_enable</b>, then tap on&nbsp;<b>Go</b></p>
                                 <p><img className="mx-auto" src={Help2} alt="" style={{maxWidth: '97%'}} /></p>
                              </li>
                              <li>
                                 <p>2). A prompt will appear that will ask if you want to&nbsp;<b>Open this page in “Trust”?</b>, tap on&nbsp;<b>Open</b></p>
                                 <p><img className="mx-auto" src={Help3} alt="" style={{maxWidth: '97%'}} /></p>
                                 <p>The&nbsp;<b>Trust Wallet</b>&nbsp;app will launch and the&nbsp;<b>DApp&nbsp;browser</b>&nbsp;will be enabled</p>
                                 <p><img className="mx-auto" src={Help4} alt="" style={{maxWidth: '97%'}} /></p>
                              </li>
                           </ul>
                           <div className="d-flex mt-4"><a className="btn btn-info me-2 w-100 text-white text-center" href="https://link.trustwallet.com/open_url?coin_id=56&amp;url=https://bscpad.com/">Open with <img src={TrustPlatform} width="30px" className="me-2" /></a></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="modal fade " id="walletModal" tabindex="-1" aria-labelledby="walletModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-md modal-dialog-centered">
                     <div className="modal-content">
                        <div className="modal-header">
                           <h6 className="modal-title text-dark" id="walletModalLabel">Your wallet</h6>
                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           <div className="mb-3">
                              <h5 className="text-dark mb-2" style={{fontSize: '17px', wordBreak: 'break-word'}}><b></b></h5>
                              <a href="https://bscscan.com/address/null" target="_blank" className="text-warning d-inline-flex align-items-center me-4" style={{textDecoration: 'none'}}><span className="me-1">View on BscScan</span><i className="mdi mdi-open-in-new"></i></a><a className="text-warning d-inline-flex align-items-center" href="https://www.google.com/" style={{textDecoration: 'none'}}><span className="me-1">Copy Address</span><i className="mdi mdi-content-copy"></i></a>
                           </div>
                           <div className="text-center mt-4"><a href="https://www.google.com/" className="btn btn-outline-primary" data-bs-dismiss="modal">Logout</a></div>
                        </div>
                     </div>
                  </div>
               </div>
               <span></span>
            </div>
         </div>
      </body>
   );
}

export default Landing;
import React from 'react';

import './PricingTable.css';

const PricingTable = () => {
  return (
    <>
    <section>
        <div class="content">

            <div class="basic box">
                <h2 class="title">Basic</h2>
                <div class="view">
                    <div class="icon">
                        <img src="https://i.postimg.cc/2jcfMcf4/hot-air-balloon.png" alt="hot-air-balloon" />
                    </div>
                    <div class="cost">
                        <p class="amount">₹00</p>
                        <p class="detail">per month</p>
                    </div>
                </div>
                <div class="description">
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Harum, beatae laudantium.</li>
                        <li>Odit, fugit saepe.</li>
                        <li>Harum, veniam suscipit!</li>
                        <li>A, aut veritatis!</li>
                        <li>Aliquid, quasi repellat!</li>
                    </ul>
                </div>
                <div class="button">
                    <button type="submit" >START FREE 7 DAYS TRIAL</button>
                </div>
            </div>
    
            <div class="standard box">
                <h2 class="title">Standard</h2>
                <div class="view">
                    <div class="icon">
                        <img src="https://i.postimg.cc/DzrTN72Z/airplane.png" alt="airplane" />
                    </div>
                    <div class="cost">
                        <p class="amount">₹99</p>
                        <p class="detail">per year</p>
                    </div>
                </div>
                <div class="description">
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Harum, beatae laudantium.</li>
                        <li>Odit, fugit saepe.</li>
                        <li>Harum, veniam suscipit!</li>
                        <li>A, aut veritatis!</li>
                        <li>Aliquid, quasi repellat!</li>
                    </ul>
                </div>
                <div class="button">
                    <button type="submit" >START FREE 7 DAYS TRIAL</button>
                </div>
            </div>
    
            <div class="business box">
                <h2 class="title">Business</h2>
                <div class="view">
                    <div class="icon">
                        <img src="https://i.postimg.cc/wvFd6FRY/startup.png" alt="startup" />
                    </div>
                    <div class="cost">
                        <p class="amount">₹199</p>
                        <p class="detail">per year</p>
                    </div>
                </div>
                <div class="description">
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Harum, beatae laudantium.</li>
                        <li>Odit, fugit saepe.</li>
                        <li>Harum, veniam suscipit!</li>
                        <li>A, aut veritatis!</li>
                        <li>Aliquid, quasi repellat!</li>
                    </ul>
                </div>
                <div class="button">
                    <button type="submit" >START FREE 7 DAYS TRIAL</button>
                </div>
            </div>

        </div>
    </section>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default PricingTable
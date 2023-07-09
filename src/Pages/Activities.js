import '../Style/Activities.css'

function Activities() {
    return (
        <div className="Activities">
            <p style={{ fontWeight: 'initial', color: '#1976d2'}}>ACTIVITIES</p>

            <p>My Responsiblities and extra currucilar activities during my gradute and undergraduate studies</p>

            <br></br>


            <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div>
            <h4>TEACHING ASSOCIATE</h4>
            <p style={{ fontStyle:'italic'}}>Wilfrid Laurier University</p>
            <p style={{ color: 'silver'}}>2022 - Present</p>
            <p style={{ fontSize: '23px'}}>Discussed with under graduate students regarding data structures. <br></br>
                Helped them solve the lab practicals and assesments and reviewed the students answers </p>
            <br></br>

            <h4>PLACEMENT CORDINATOR</h4>
            <p style={{ fontStyle:'italic'}}>BMS College Of Engineering</p>
            <p>2020</p>
            <p style={{ fontSize: '23px'}}> Managed meetings with various companies for final year bachelors students </p>
            <p></p>

            <br></br>

            <h4>EVENT ORGANISER</h4>
            <p style={{ fontStyle:'italic'}}>BMS College Of Engineering</p>
            <p> 2018 - 2019 </p>
            <p style={{ fontSize: '23px'}}> Organised and ran ROBOTICS and Sensor two of the biggest  workshop  on campus during the technical phaseshift event.</p>
            <p></p>
            <br></br>
            </div>

            <div>
                 <h4>INTERNATIONAL SOCIETY OF AUTOMATION</h4>
            <p style={{ fontStyle:'italic'}}>BMS College Of Engineering</p>
            <p>2017 - 2019 </p>
            <p style={{ fontSize: '23px'}}>Organized executive board members & meeting. Designed STA discussion event posters.<br></br>
               Took record of STA meeting & discussion. Recruited Stanford students into club members.</p>

            <br></br>

            <h4>RIGHT WING PLAYER</h4>
            <p style={{ fontStyle:'italic'}}>BMS College Of Engineering</p>
            <p> 2016 - 2020 </p>
            <p style={{ fontSize: '23px'}}> Participated in rigorous handball training 4 times every week.<br></br>
                Represented the college in the inter-zonal and zonal handball tournaments.</p>
            </div>
            </div>
            

           

        </div>
    )
}

export default Activities;
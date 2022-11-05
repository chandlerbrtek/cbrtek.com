import React from 'react';
import Job from "../components/Job";
import Role from "../components/Role";
import ProxibidDesc from "../components/descriptions/ProxibidDesc";
import AvitureDesc from "../components/descriptions/AvitureDesc";
import ATGDesc from "../components/descriptions/ATGDesc";
import ATGSeniorDesc from "../components/descriptions/ATGSeniorDesc";
import ATGLeadDesc from "../components/descriptions/ATGLeadDesc";
import JobLogo from "../components/JobLogo";
import atgLogo from "../images/atg.png";
import avLogo from "../images/aviture.png";
import pbLogo from "../images/proxibid.png";

function Work() {
  return (
      <div>
        <Job
            logo={<JobLogo image={atgLogo} company={'atg'}/>}
            company={'Auction Technology Group'}
            roles={
              <React.Fragment>
                <Role title={'Lead Software Development Engineer'}
                      dates={'July 2022 - Now'}
                      description={<ATGLeadDesc/>}
                />
                <Role title={'Senior Software Development Engineer'}
                      dates={'Jan 2022 - July 2022'}
                      description={<ATGSeniorDesc/>}
                />
                <Role title={'Software Development Engineer'}
                      dates={'Apr 2021 - Jan 2022'}
                      description={<ATGDesc/>}
                />
              </React.Fragment>
            }
        />
        <Job
            logo={<JobLogo image={avLogo} company={'av'}/>}
            company={'Aviture'}
            roles={<Role title={'Software Engineer'}
                         dates={'May 2020 - Apr 2021'}
                         description={<AvitureDesc/>}
            />}
        />        <Job
          logo={<JobLogo image={pbLogo} company={'pb'}/>}
          company={'Proxibid'}
          roles={<Role title={'Software Developer'}
                       dates={'Oct 2018 - March 2020'}
                       description={<ProxibidDesc/>}
          />}
      />
      </div>
  );
}

export default Work;
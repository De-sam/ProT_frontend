// components/ServicesSection.js
import React from 'react';

const ServicesSection = () => (
  <div className="w-[1327px] h-[688px] m-6">
    <div className="items-center justify-center text-center text-[36px] font-bold">
      Our Services
    </div>
    <div className="grid grid-cols-3 mt-6 gap-4">
      {/* Service 1 */}
      <div className="bg-[#F5F5F5] w-[424px] h-[560px]">
        <div
          className="flex h-[416px] bg-cover"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/2d81/0fab/27ba68214feb27d5640c734d03750d5a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ik1Vkb-dhIqKh9IEbYbFSAJbm4LGbixttN01bWH6OF0nT1OZ6KVUp~McZACN2YQM-FgBu7UffIg4BT9ORnWNwanfiy9yvPbt-I81PSErcWbJ1ReLfu-MbCPTseGAerlXCXT5w83jE8fENcbhZyk3e27S1P77V~VuKFwPqEAX-0LjC7tVYpeco9toHLg0DkRvCLGR1rlr9mEmEecs6ui8WgmtaqxPu0L5~GN5UKsB6nacukYbtmyFd7TkLJKqZHZYDdVWIKg4vjAFY7J7v61f1Ple4jVbh2gV6TXtNPWlA-D6oHUGUOT5eI~8BuJfqkkmJSv2MNsasguCyGvRMFUfTg__')",
          }}
        />
        <div className="relative mt-11 flex items-center justify-center text-[24px] font-semibold">
          Lengthening Services
        </div>
      </div>

      {/* Service 2 */}
      <div className="bg-[#F5F5F5] w-[424px] h-[560px]">
        <div
          className="flex h-[416px] bg-cover"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/28b7/1943/038d81c1a3105dc5ab0a95f170ab0bce?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ToCWwKFZZACyM2~OrHheX11xucquxQg5L5wq9DX4As5zvjb-R08Ac~c7yx5U2-wSrCF6ao9~Ec615YauyxtNKJAmPkVArhArS-4fcp5mVgUV-ofknW3Qllq8WCZ5yXVSvaD27YBS69bk5gKDHqMdfi8LkfcV65HmN29Z8OLDm~TnLc6fvFEfl-t4mQ3pSn3mr84VuTn79m-ZgEXPFer2umJ5cxtKPUSAd8cOGgTA01UGqbJ7M9tOpPB1wLDuzJBsTQ1NUiN-DnOfgy5R6gjko9W75NHlgR1EmzQZnMT~I8JbL8cUSIVmT-m1lyRPQ0cWoPh7vImGmyhVRE2the1taQ__')",
          }}
        />
        <div className="relative mt-11 flex items-center justify-center text-[24px] font-semibold">
          Body Measurement
        </div>
      </div>

      {/* Service 3 */}
      <div className="bg-[#F5F5F5] w-[424px] h-[560px]">
        <div
          className="flex h-[416px] bg-cover"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/6833/7304/426e3a499f198f87859d06ae89ee3879?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjmrqTiJQU1hJmPLumudVz5WG0xqBJNAaU97-5PHv5V6mDyD21R13wBjnM1q2~b-suZRCo4RjXnjvdD1oMm8vNOD5O9wUUTLonU1Iwv3XAPHdfhzPITvhYr2uSfcOD73hxefdyipgadoB37lwslvCpVrCHcbs1~n770MdgnhDXNKkSQZiIAJw8KldrypgVFBmPlaLYvcKurAHmGJz2dYoBIYPTWpvZrnMVcVovoW4QKxvM4jyBGnDwwZwGB2QxUpv3O8pzRr9ntipX3FZ7OnPxL3San0BzuP6zbArIVLPf2OfOJZr9ZN3Pwt7P0v5m1qGPv5AWSWM1hisd7dfhTOVQ__')",
          }}
        />
        <div className="relative mt-11 flex items-center justify-center text-[24px] font-semibold">
          Restoration
        </div>
      </div>
    </div>
  </div>
);

export default ServicesSection;

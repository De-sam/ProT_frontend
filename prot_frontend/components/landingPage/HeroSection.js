// components/HeroSection.js
import React from 'react';

const HeroSection = () => (
  <div
    className="h-[708px] w-screen relative"
    style={{
      backgroundImage:
        "url('https://s3-alpha-sig.figma.com/img/46dc/fa0a/680711d18f9a2473c0111baf28ff9cd1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P2fl7VW~vWgrenBEtxAIz0-AtT5UzAdipRHKN~Ijat8q1xUL8IzJ5ZLUL4XF3gqEiwoGDcQjzHQ1XAqCC6UAjoJyMFYRH3a2DhCGKvaBB7nCel8YXWJm7JZSkwfjxHYjUOK7MAqvHDuexbhB8UBgLSV6JKKiDk0gPNZPa4k-oG9rClzpFp4CVLr7~6Fjs9d8V0xkroj46JpXgwVkOPj4F8Go2XKE9OOdF6onkS25w8d2eB2I8R6eMgSHUYGjxfNl5pq1qfsdVc1Sr1JQushGNc6se~6pG~7lpWWC5KYY6QsJEKgjfs5s-cj5akGScBbKaMesnbKH4fCs0hmVNFW6wQ__')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[#1C1C1C] opacity-60" />
    <div className="absolute inset-0 z-10">
      <div className="grid grid-cols-2">
        <div className="col-span-1 ml-16 mt-36">
          <div className="text-[36px] font-bold w-[548px] h-[90px] text-white">
            Individual custom tailoring clothes that suit you
          </div>
          <div className="relative mt-11 w-[441px] h-[75px] text-[20px] tracking-tighter text-white">
            Gain access to exclusive offers, receive updates on the latest trends, and enjoy personalized style recommendations
          </div>
          <div className="relative mt-11">
            <button className="w-[150px] h-[45px] bg-[#1A3A4F] p-[10px] rounded-lg text-white font-semibold">
              Our Service
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <div
            className="flex h-[455px] bg-cover items-end mt-64"
            style={{
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/b928/0f35/fea27144b4eb6492d56dfdf558005fd0?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VkQ-SFiZhB4SZ~9k9XSQyNBYnSpkANwpeVkCo-QDpUU36adUwK8zHSX3jbGoW6hTpUFWpTXbbSRcofjYjySKFwFdh6XmgulbavCMfKKtvHLWTywTgIuDoZRwBndCnI27oIrcwh7pLjIYK-Q37bKUShwIz43~WzccW5pcDJ3u3nsMWBX0mYVZEOic3eUKuPV0cfsj6auo02EKzv--4NAexNnLS8~~aU3U7ewkZIZ047qb-o93uP-ueQe-gGVPrJFlFMUsyaDhWIHamNCyPMDrrb2rLgJOchnCFvl0KPIj5v2PQZ7PvPc-oCveyH9LIanbJ8y8lKdBuOpXjcgWU2T8dQ__')",
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;

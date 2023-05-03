import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';
import '../../fonts/Roboto-Bold.ttf';

const Sidebar = ({children}) => {
  const menuItem = [
    {
    path:"clients",
    name:"Clients",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.875 11.1254C14.75 10.1254 15.875 8.25036 15.875 6.00036C15.875 2.75036 13.25 0.125359 10 0.125359C6.75 0.000358932 4.125 2.62536 4.125 5.87536C4.125 8.12536 5.375 10.0004 7.125 11.0004C3.375 12.2504 0.625 15.8754 0.625 20.0004H1.875C1.875 15.5004 5.5 11.8754 10 11.8754C14.5 11.8754 18.125 15.5004 18.125 20.0004H19.375C19.375 15.8754 16.625 12.2504 12.875 11.1254ZM5.375 5.87536C5.375 3.37536 7.375 1.25036 10 1.25036C12.625 1.25036 14.625 3.37536 14.625 5.87536C14.625 8.37536 12.625 10.6254 10 10.6254C7.375 10.6254 5.375 8.50036 5.375 5.87536Z" fill="#BEDCFF"/>
    </svg>
    ,
  },
  {
    path: "coaches",
    name: "Coaches",
    icon: <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4492 7.40039C15.7161 7.86914 15.9147 8.35742 16.0449 8.86523C16.1751 9.37305 16.2435 9.89714 16.25 10.4375V11.4434L10 14.5781L3.75 11.4434C3.75 11.0527 3.75326 10.6882 3.75977 10.3496C3.76628 10.0111 3.79557 9.68229 3.84766 9.36328C3.89974 9.04427 3.97786 8.72526 4.08203 8.40625C4.1862 8.08724 4.34245 7.75195 4.55078 7.40039L2.5 6.375V12.1074C2.6888 12.1725 2.85807 12.2637 3.00781 12.3809C3.15755 12.498 3.29102 12.6348 3.4082 12.791C3.52539 12.9473 3.61003 13.1165 3.66211 13.2988C3.71419 13.4811 3.74349 13.6732 3.75 13.875V17H0V13.875C0 13.6797 0.0292969 13.4909 0.0878906 13.3086C0.146484 13.1263 0.23112 12.9538 0.341797 12.791C0.452474 12.6283 0.582682 12.4915 0.732422 12.3809C0.882161 12.2702 1.05469 12.179 1.25 12.1074V5.75L0 5.125L10 0.125L20 5.125L15.4492 7.40039ZM2.5 13.875C2.5 13.7057 2.43815 13.5592 2.31445 13.4355C2.19076 13.3118 2.04427 13.25 1.875 13.25C1.70573 13.25 1.55924 13.3118 1.43555 13.4355C1.31185 13.5592 1.25 13.7057 1.25 13.875V15.75H2.5V13.875ZM2.79297 5.125L10 8.72852L17.207 5.125L10 1.52148L2.79297 5.125ZM15 10.6719C15 10.1706 14.9512 9.70508 14.8535 9.27539C14.7559 8.8457 14.5833 8.40625 14.3359 7.95703L10 10.125L5.66406 7.95703C5.44922 8.33464 5.28646 8.73177 5.17578 9.14844C5.0651 9.5651 5.00651 9.99479 5 10.4375V10.6719L10 13.1719L15 10.6719Z" fill="#BEDCFF"/>
    </svg>,
  },
  {
    path: "exercises",
    name: "Exercises",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8366 5.79021L19.5321 5.0947C20.156 4.47091 20.156 3.45585 19.5321 2.83202L17.168 0.467822C16.5441 -0.155927 15.5291 -0.155967 14.9053 0.467862L14.2098 1.16337L13.571 0.5245C12.9471 -0.0992482 11.9321 -0.0992882 11.3083 0.52454L9.89726 1.93555C9.27199 2.56074 9.27187 3.57297 9.89726 4.19827L11.3076 5.60865L5.6087 11.3075L4.19832 9.89717C3.57322 9.27198 2.56091 9.27174 1.93565 9.89717L0.524551 11.3082C-0.0991982 11.932 -0.0991982 12.9471 0.524591 13.5709L1.16338 14.2097L0.467872 14.9052C-0.155957 15.529 -0.155957 16.5441 0.467872 17.1679L2.83203 19.5321C3.45602 20.1559 4.47092 20.1559 5.09471 19.532L5.79022 18.8365L6.42904 19.4754C7.05283 20.0991 8.06789 20.0991 8.69172 19.4754L10.1027 18.0643C10.728 17.4391 10.7281 16.4269 10.1027 15.8016L8.69236 14.3912L14.3913 8.69231L15.8016 10.1027C16.4267 10.7279 17.439 10.7281 18.0643 10.1027L19.4754 8.69167C20.0991 8.06784 20.0992 7.05278 19.4754 6.42899L18.8366 5.79021ZM15.8103 1.37285C15.9351 1.24809 16.1381 1.24809 16.2629 1.37285L18.627 3.737C18.7517 3.86176 18.7518 4.0648 18.627 4.18955L17.9315 4.88506L15.1148 2.06831L15.8103 1.37285ZM4.18968 18.627C4.06493 18.7518 3.86189 18.7518 3.73713 18.627L1.37302 16.2629C1.24826 16.1381 1.24822 15.9351 1.37298 15.8103L2.06848 15.1148L4.88519 17.9315L4.18968 18.627ZM9.19771 17.1592L7.7867 18.5703C7.66194 18.695 7.45891 18.695 7.33415 18.5703C6.05305 17.2892 2.73259 13.9687 1.42969 12.6658C1.30494 12.5411 1.30494 12.338 1.42965 12.2133C2.96127 10.6818 2.88671 10.7086 3.06702 10.7086C3.26746 10.7086 2.83411 10.343 9.19775 16.7067C9.32251 16.8314 9.32279 17.0342 9.19771 17.1592ZM7.78734 13.4861L6.51376 12.2126L12.2127 6.51367L13.4862 7.78725L7.78734 13.4861ZM18.5703 7.78661C17.0387 9.31814 17.1133 9.29134 16.933 9.29134C16.7503 9.29134 16.8486 9.33954 14.8438 7.33474C10.4895 2.98046 10.7086 3.25633 10.7086 3.06693C10.7086 2.8883 10.6766 2.9663 12.2133 1.4296C12.2757 1.36721 12.3576 1.33601 12.4396 1.33601C12.6268 1.33601 12.1068 0.870574 18.5703 7.33402C18.6951 7.45881 18.6951 7.66185 18.5703 7.78661Z" fill="#BEDCFF"/>
    </svg>,
  },
  {
    path: "recipes",
    name: "Recipes",
    icon: <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.4817 1.17188H16.5235C16.8471 1.17188 17.1094 0.909576 17.1094 0.585938C17.1094 0.262299 16.8471 0 16.5235 0H3.02985C1.84164 0 0.875 0.966644 0.875 2.155V17.8452C0.875 19.0334 1.84164 20 3.02985 20H14.9544C16.1426 20 17.1094 19.0334 17.1094 17.8452V5.29297C17.1094 4.70108 16.8694 4.16428 16.4818 3.77441L16.4817 1.17188ZM3.02985 1.17188H15.3098V3.16788C15.1942 3.14865 15.0754 3.13812 14.9543 3.13812H3.02985C2.48785 3.13812 2.04688 2.69714 2.04688 2.155C2.04688 1.61285 2.48785 1.17188 3.02985 1.17188ZM15.9376 17.8452C15.9376 18.3871 15.4966 18.8281 14.9544 18.8281H3.02985C2.48785 18.8281 2.04688 18.3871 2.04688 17.8452V4.07242C2.34183 4.22424 2.67599 4.31 3.02985 4.31H14.9544C15.1658 4.31 15.3615 4.37729 15.5221 4.49112C15.5361 4.50272 15.5506 4.5137 15.5657 4.52393C15.7921 4.70413 15.9376 4.98184 15.9376 5.29297V17.8452Z" fill="#BEDCFF"/>
    <path d="M11.1887 7.46841C11.1344 7.46841 11.0798 7.47009 11.0251 7.4733C10.5022 6.91483 9.76538 6.58981 8.99222 6.58981C8.21906 6.58981 7.48221 6.91467 6.95944 7.4733C6.90466 7.47009 6.85004 7.46841 6.79572 7.46841C5.26129 7.46841 4.01312 8.71674 4.01312 10.251C4.01312 11.5843 4.95581 12.7016 6.20978 12.9715V15.9622C6.20978 16.2859 6.47208 16.5482 6.79572 16.5482H11.1889C11.5124 16.5482 11.7748 16.2859 11.7748 15.9622V12.9715C13.0286 12.7017 13.9715 11.5843 13.9715 10.251C13.9715 8.71674 12.7231 7.46841 11.1887 7.46841ZM7.38165 15.3763V14.6654H10.6029V15.3763H7.38165ZM11.1887 11.8617C10.8652 11.8617 10.6028 12.124 10.6028 12.4477V13.4935H7.3815V12.4477C7.3815 12.124 7.1192 11.8617 6.79556 11.8617C5.9075 11.8617 5.185 11.1391 5.185 10.251C5.185 9.36295 5.9075 8.64044 6.79556 8.64044C6.89536 8.64044 6.99713 8.65005 7.09799 8.66913C7.32169 8.7114 7.54996 8.62015 7.68286 8.43506C7.98544 8.01346 8.47495 7.76169 8.99222 7.76169C9.50949 7.76169 9.99899 8.01346 10.3016 8.43506C10.4345 8.6203 10.6628 8.71155 10.8866 8.66913C10.9873 8.65005 11.0891 8.64044 11.1889 8.64044C12.0769 8.64044 12.7996 9.36295 12.7996 10.251C12.7996 11.1391 12.0769 11.8617 11.1887 11.8617Z" fill="#BEDCFF"/>
    </svg>,
  },
  {
    path: "articles",
    name: "Articles",
    icon: <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7.5V8.75H3V7.5H13ZM10.5 2.5V3.75H3V2.5H10.5ZM8 17.5V11.25H13V17.5H8ZM9.25 12.5V16.25H11.75V12.5H9.25ZM13 5V6.25H3V5H13ZM0.5 2C0.5 0.895431 1.39543 0 2.5 0H13.5C14.6046 0 15.5 0.895431 15.5 2V18C15.5 19.1046 14.6046 20 13.5 20H2.5C1.39543 20 0.5 19.1046 0.5 18V2ZM13.25 18.75C13.8023 18.75 14.25 18.3023 14.25 17.75V2.25C14.25 1.69772 13.8023 1.25 13.25 1.25H2.75C2.19772 1.25 1.75 1.69772 1.75 2.25V17.75C1.75 18.3023 2.19772 18.75 2.75 18.75H13.25ZM6.75 16.25V17.5H3V16.25H6.75ZM6.75 11.25V12.5H3V11.25H6.75ZM6.75 13.75V15H3V13.75H6.75Z" fill="#BEDCFF"/>
    </svg>,
  },
  {
    path: "sample_menus",
    name: "Sample menus",
    icon: <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9294 11.862C19.8389 11.7006 19.6735 11.5982 19.4924 11.5825C19.2444 7.22021 16.0396 3.64143 11.8624 2.80678C12.0435 1.83039 11.6892 0.416992 10.0041 0.416992C8.41358 0.416992 7.90177 1.86976 8.14586 2.80678C3.96078 3.64143 0.759964 7.22415 0.507993 11.5825C0.326888 11.5982 0.161532 11.7006 0.0709804 11.862C-0.0274458 12.0392 -0.0235087 12.2518 0.0827915 12.425L1.86627 15.3187C1.96864 15.4841 2.1458 15.5825 2.33872 15.5825H17.6578C17.8507 15.5825 18.0278 15.4841 18.1302 15.3187L19.9137 12.425C20.0239 12.2518 20.0279 12.0392 19.9294 11.862ZM10.0002 1.52724C10.89 1.52724 10.8664 2.35796 10.7404 2.65323C10.4963 2.63355 10.2482 2.62174 10.0002 2.62174C9.75218 2.62174 9.50414 2.63355 9.26005 2.65323C9.13406 2.35796 9.08288 1.52724 10.0002 1.52724ZM10.0002 3.73592C14.4451 3.73592 18.0908 7.20446 18.3782 11.5785H1.62218C1.90958 7.20446 5.55529 3.73592 10.0002 3.73592ZM17.3507 14.4722H2.64975L1.55131 12.6888H18.4491L17.3507 14.4722Z" fill="#BEDCFF"/>
    </svg>,
  },
  {
    path: "feel_best",
    name: "Feel best",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.4841 4.41382C19.1701 4.10062 18.7585 3.92081 18.3184 3.90277C18.8202 3.21566 18.7611 2.24382 18.1411 1.62379C17.5132 0.995897 16.5245 0.94328 15.8361 1.46586C15.6967 0.635077 14.9724 0 14.1027 0C13.1335 0 12.345 0.788514 12.345 1.75769V4.01437C10.8026 3.6298 9.10248 4.0332 7.88787 5.24784C6.26628 6.86948 0.693044 17.8984 0.062928 19.1506C-0.0518374 19.3787 -0.00574372 19.6548 0.176873 19.8332C0.359451 20.0116 0.63656 20.0512 0.861872 19.9311C2.78906 18.9041 12.9729 13.421 14.517 11.877C15.723 10.671 16.133 8.966 15.7474 7.42049L18.2438 7.4244C19.213 7.42381 20.0009 6.63128 20.0003 5.65772C20 5.18737 19.8167 4.74562 19.4841 4.41382ZM13.6884 11.0483C13.5119 11.2248 13.1872 11.4712 12.7515 11.7688L11.2396 10.2569C11.0108 10.0281 10.6398 10.0281 10.411 10.2569C10.1822 10.4857 10.1822 10.8567 10.411 11.0855L11.7484 12.4229C10.8648 12.9793 9.76834 13.6311 8.59256 14.3104L7.95623 13.6741C7.72745 13.4453 7.35643 13.4453 7.1276 13.6741C6.89877 13.9029 6.89877 14.2739 7.1276 14.5027L7.53936 14.9145C5.59585 16.0215 3.55011 17.1477 1.95671 18.0115C2.48843 16.9745 3.12448 15.7485 3.79401 14.482C4.02655 14.6961 4.38327 14.6868 4.60448 14.4656C4.83331 14.2367 4.83331 13.8658 4.60448 13.6369L4.36854 13.401C4.95905 12.2961 5.5596 11.1925 6.12475 10.1853L7.09045 11.151C7.31924 11.3798 7.69026 11.3799 7.91909 11.151C8.14791 10.9222 8.14791 10.5512 7.91909 10.3224L6.72545 9.12877C7.59244 7.62631 8.3217 6.47143 8.71658 6.07655L10.3738 7.73381C10.6027 7.96264 10.9736 7.96264 11.2025 7.73381C11.4313 7.50499 11.4313 7.13401 11.2025 6.90518L9.68627 5.38897C10.9685 4.77523 12.5878 4.97597 13.6884 6.07655C15.0591 7.44721 15.0591 9.67756 13.6884 11.0483ZM18.2444 6.25257L15.2789 6.25573C15.0757 5.89761 14.822 5.5528 14.517 5.24788C14.2148 4.94565 13.8707 4.69769 13.5091 4.49171V1.76554C13.5091 1.44254 13.7797 1.17191 14.1027 1.17191C14.4257 1.17191 14.6885 1.43472 14.6885 1.75773V2.83316C14.6885 3.35281 15.3199 3.61636 15.6888 3.24749L16.4838 2.45246C16.7123 2.22398 17.084 2.22402 17.3125 2.45246C17.5409 2.68093 17.5409 3.05265 17.3125 3.28109L16.5196 4.07398C16.1513 4.44226 16.4132 5.07425 16.9339 5.07425C16.9341 5.07425 16.9342 5.07425 16.9344 5.07425L18.243 5.07315C18.2434 5.07315 18.2437 5.07315 18.2441 5.07315C18.5678 5.07315 18.8283 5.33483 18.8285 5.6585C18.8287 5.98585 18.5661 6.25233 18.2444 6.25257Z" fill="#BEDCFF"/>
    </svg>,
  },
  {
    path: "eating_level",
    name: "Eating level",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_14003_4089)">
    <path d="M9.22149 8.28227L5.66266 0.42611C5.49995 0.066807 5.07675 -0.0925901 4.71745 0.070113C4.70866 0.0740885 4.69996 0.0782314 4.69134 0.0825836C2.49539 1.18912 0.823373 3.11569 0.0369333 5.44551C-0.0850102 5.81076 0.104517 6.20693 0.465452 6.34113L8.32161 9.24719C8.40149 9.27632 8.48581 9.2913 8.57085 9.29146C8.9653 9.29159 9.28514 8.97192 9.28523 8.57746C9.28527 8.47565 9.26355 8.375 9.22149 8.28227ZM1.64317 5.25268C2.28172 3.79885 3.3415 2.56987 4.68564 1.72455L7.2139 7.31388L1.64317 5.25268Z" fill="#BEDCFF"/>
    <path d="M13.2628 1.79043C12.4336 1.55412 11.5756 1.43452 10.7135 1.43506C9.90608 1.43745 9.10245 1.5455 8.32308 1.75645C7.94377 1.86458 7.72391 2.25975 7.83204 2.6391C7.93762 3.00949 8.31789 3.22944 8.69159 3.13629C12.9046 1.99339 17.2464 4.48223 18.3893 8.69523C19.5322 12.9082 17.0433 17.25 12.8303 18.3929C8.61735 19.5358 4.27555 17.047 3.13265 12.834C2.75297 11.4343 2.76565 9.95714 3.16939 8.5642C3.27167 8.18326 3.04573 7.79153 2.6648 7.68925C2.29319 7.58949 1.90936 7.80203 1.79671 8.16996C0.392142 13.0979 3.24836 18.2314 8.17623 19.636C13.1041 21.0405 18.2377 18.1844 19.6422 13.2564C21.0468 8.32852 18.1907 3.19504 13.2628 1.79043Z" fill="#BEDCFF"/>
    </g>
    <defs>
    <clipPath id="clip0_14003_4089">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>,
  },
  {
    path: "stickers",
    name: "Stickers",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.75915 0.000976562L7.37967 0.107989C5.29619 0.695528 3.41871 1.96954 2.09312 3.69534C0.723794 5.47805 0 7.61139 0 9.86467C0 12.5721 1.05434 15.1176 2.96878 17.032C4.8833 18.9465 7.42864 20.0008 10.1362 20.0008C12.3896 20.0008 14.5231 19.2769 16.3058 17.9075C18.0317 16.5817 19.3057 14.7041 19.893 12.6204L20 12.2409L7.75915 0.000976562ZM7.96478 2.10934L17.8913 12.0352C17.4887 12.091 17.0811 12.1192 16.6715 12.1192C11.8243 12.1192 7.88082 8.17575 7.88082 3.32855C7.88082 2.91916 7.90899 2.51183 7.96478 2.10934ZM10.1362 18.6553C5.28897 18.6553 1.34551 14.7119 1.34551 9.86467C1.34551 6.33652 3.47765 3.16534 6.65143 1.79212C6.57438 2.29875 6.53532 2.81233 6.53532 3.32855C6.53532 6.03603 7.58966 8.58146 9.50409 10.4959C11.4186 12.4104 13.964 13.4647 16.6715 13.4647C17.1881 13.4647 17.7021 13.4256 18.2091 13.3484C16.8361 16.5228 13.6647 18.6553 10.1362 18.6553Z" fill="#BEDCFF"/>
    </svg>,
  },];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
            <div className="pic">
              <h1>{<svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_13997_4042)">
<path d="M12.336 32.1395L8.5189 24.2326L5.12073 58L10.3809 33.6744L14.198 41.5814L17.5962 7.81396L12.336 32.1395Z" fill="#F6FAFF"/>
<path d="M5.95844 38.7441H3.16542L3.67747 33.9999H6.37739L6.70324 31.2092H3.95677L4.42228 26.8836H7.21529L7.4946 24.0464H1.81546L0 41.4417H5.67914L5.95844 38.7441Z" fill="#F6FAFF"/>
<path d="M22.6235 26.8836L22.9493 24.0464H17.2702L15.4547 41.4417H21.1338L21.4132 38.7441H18.6201L19.0856 33.9999H21.8321L22.1114 31.2092H19.4115L19.8304 26.8836H22.6235Z" fill="#F6FAFF"/>
<path d="M30.4441 29.7208C30.5372 28.8836 30.5837 28.1394 30.5837 27.4882C30.5837 25.3022 29.8855 24.0464 27.3252 24.0464H23.927L22.1116 41.4417H24.9511L25.6028 35.5348H25.8821L26.3942 41.4417H29.2338L28.6286 34.7441C29.8855 33.6743 30.2113 31.8603 30.4441 29.7208ZM27.558 29.8138C27.2787 32.1394 27.1856 32.8371 26.3942 32.8371H25.8821L26.4873 26.7906H26.9994C27.5114 26.7906 27.6976 27.0696 27.6976 27.8138C27.6976 28.3255 27.6511 28.8371 27.558 29.8138Z" fill="#F6FAFF"/>
<path d="M35.6107 26.7908C36.4486 26.7908 37.1003 26.9304 37.5658 27.0699L38.4503 24.3722C37.752 24.1397 36.6348 23.9536 35.471 23.9536C34.0745 23.9536 33.1435 24.2327 32.4918 24.8373C31.3746 25.9536 31.1884 28.3257 30.7229 32.5118C30.4436 34.7908 30.304 36.5118 30.304 37.8141C30.304 40.6048 30.9091 41.535 33.7952 41.535C36.9141 41.535 37.2865 40.0001 37.7055 35.9536L38.2175 31.1164H34.4469L34.1676 33.9071H35.2383L34.959 36.0466C34.6331 38.7443 34.6331 39.0699 33.8883 39.0699C33.3297 39.0699 33.1435 38.7908 33.1435 37.8141C33.1435 36.8839 33.3297 35.3025 33.5625 32.7908C34.2142 27.2559 34.2142 26.7908 35.6107 26.7908Z" fill="#F6FAFF"/>
<path d="M42.2213 30.8371L41.942 24.0464H38.9628L40.1265 36.3255L39.6145 41.4417H42.5006L43.0126 36.6045L46.8763 24.0464H43.9437L42.2213 30.8371Z" fill="#F6FAFF"/>
<path d="M20.5751 22.8838H22.3906L23.8802 16.1397L24.2992 13.9071L24.0664 16.1397L23.3216 22.8838H25.7888L27.4646 7.95361H24.113L22.7164 14.1862L22.2975 16.2327V14.1397L22.344 7.95361H18.9924L17.3632 22.8838H19.6907L20.4355 16.0466L20.6682 13.9071L20.6217 16.0001L20.5751 22.8838Z" fill="#F6FAFF"/>
<path d="M30.2575 22.9768C31.4678 22.9768 32.2592 22.8372 32.8178 22.3256C33.7488 21.4419 33.9815 19.5814 34.4005 15.5814C34.6332 13.5349 34.7729 12.1395 34.7729 11.1163C34.7729 8.93024 34.3074 7.81396 31.7006 7.81396C30.4903 7.81396 29.6523 8.04652 29.1403 8.65117C28.1627 9.62792 27.9765 11.6279 27.5576 15.2093C27.3248 17.1628 27.1852 18.6512 27.1852 19.7209C27.1852 21.9535 27.6507 22.9768 30.2575 22.9768ZM30.211 15.4419C30.723 10.5582 30.723 10.3256 31.5609 10.3256C32.0264 10.3256 32.2126 10.4651 32.2126 11.2093C32.2126 11.907 32.073 13.2093 31.7937 15.4884C31.2351 20.4186 31.2816 20.6512 30.4437 20.6512C30.0247 20.6512 29.8385 20.5116 29.8385 19.7675C29.792 19.0233 29.9316 17.7675 30.211 15.4419Z" fill="#F6FAFF"/>
<path d="M37.1004 22.8838L37.659 17.8141H37.8917L38.3572 22.8838H40.9175L40.3589 17.1164C41.5227 16.2327 41.802 14.6513 42.0347 12.8373C42.1278 12.0931 42.1744 11.4885 42.1744 10.9304C42.1744 9.02338 41.5692 7.95361 39.2417 7.95361H36.2159L34.5867 22.8838H37.1004ZM38.4503 10.3257H38.9158C39.3813 10.3257 39.5676 10.5583 39.5676 11.2094C39.5676 11.628 39.521 12.0931 39.4279 12.8838C39.1951 14.8838 39.102 15.4885 38.4038 15.4885H37.9383L38.4503 10.3257Z" fill="#F6FAFF"/>
<path d="M48.2724 10.3722L48.5517 7.95361H43.4777L41.8019 22.8838H46.9224L47.1552 20.5583H44.6414L45.107 16.5118H47.5741L47.8069 14.0931H45.3863L45.7587 10.3722H48.2724Z" fill="#F6FAFF"/>
<path d="M55.9996 0H51.2981H6.19083V18.6977H4.37537L8.75109 23.1628L12.7079 18.6977H10.8924V4.93023H51.2981V29.8605V44.2326H9.1235V49.1628H55.9996V30.8372V0Z" fill="#C1FCD1"/>
</g>
<defs>
<clipPath id="clip0_13997_4042">
<rect width="56" height="58" fill="white"/>
</clipPath>
</defs>
</svg>}
</h1>
            </div>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
              <br></br>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
    
  );
};

export default Sidebar;

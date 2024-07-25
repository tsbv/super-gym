const initGymMembershipHover = () => {
  const gymMembershipLink = document.querySelector('.gym-membership__link');
  const gymMembership = gymMembershipLink.closest('.gym-membership');
  gymMembershipLink.addEventListener('mouseenter', () => {
    gymMembership.style.background = 'linear-gradient(151deg, #ed0233 0%, #003eb7 100%)';
  });
  gymMembershipLink.addEventListener('mouseleave', () => {
    gymMembership.style.background = '';
  });
};

export { initGymMembershipHover };

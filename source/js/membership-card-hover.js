const initGymMembershipHover = () => {
  const gymMembershipLinkNodes = document.querySelectorAll('.gym-membership__link');
  gymMembershipLinkNodes.forEach((gymMembershipLinkNode) => {
    const gymMembershipEl = gymMembershipLinkNode.closest('.gym-membership');
    gymMembershipLinkNode.addEventListener('mouseenter', () => {
      gymMembershipEl.style.background = 'linear-gradient(151deg, #ed0233 0%, #003eb7 100%)';
    });
    gymMembershipLinkNode.addEventListener('mouseleave', () => {
      gymMembershipEl.style.background = '';
    });
  });
};

export { initGymMembershipHover };

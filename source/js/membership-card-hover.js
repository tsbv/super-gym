const initMembershipHover = () => {
  const membershipLinkNodes = document.querySelectorAll('.gym-membership__link');
  membershipLinkNodes.forEach((membershipLinkNode) => {
    const membershipEl = membershipLinkNode.closest('.gym-membership');
    membershipLinkNode.addEventListener('mouseenter', () => {
      membershipEl.style.background = 'linear-gradient(151deg, #ed0233 0%, #003eb7 100%)';
    });
    membershipLinkNode.addEventListener('mouseleave', () => {
      membershipEl.style.background = '';
    });
  });
};

export { initMembershipHover };

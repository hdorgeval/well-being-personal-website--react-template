import { FC } from 'react';

export const SocialLinksVerticalNavBar: FC = () => {
  return (
    <button
      className="btn btn-primary badge rounded-pill navbar-toggler border border-0 position-absolute bottom-0 end-0 pb-7 pe-2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasResponsive"
      aria-controls="offcanvasResponsive"
    >
      <i className="bi bi-three-dots text-white fs-navbar-toggler-3"></i>
    </button>
  );
};

SocialLinksVerticalNavBar.displayName = 'SocialLinksHorizontalBar';

import { FC } from 'react';
import { SocialLinksHorizontalBar } from './SocialLinksHorizontalBar';

export const SocialLinksOffCanvas: FC = () => {
  return (
    <>
      <button
        className="btn btn-dark badge rounded-pill navbar-toggler border border-0 position-absolute bottom-0 end-0 me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSocialLinks"
        aria-controls="offcanvasSocialLinks"
        style={{ marginBottom: '33vh' }}
        title="Me contacter"
        aria-label="Me contacter"
      >
        <i className="bi bi-three-dots text-white fs-navbar-toggler-3"></i>
      </button>
      <div
        className="offcanvas offcanvas-bottom"
        tabIndex={-1}
        id="offcanvasSocialLinks"
        aria-labelledby="offcanvasSocialLinksLabel"
        style={{ minHeight: '40vh' }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title ms-1" id="offcanvasSocialLinksLabel">
            Contact
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white me-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small d-flex flex-column align-items-center pt-0">
          <SocialLinksHorizontalBar />
        </div>
      </div>
    </>
  );
};

SocialLinksOffCanvas.displayName = 'SocialLinksHorizontalBar';
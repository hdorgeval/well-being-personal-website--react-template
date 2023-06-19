import { FC } from 'react';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { usePublicPage } from '../contexts/userContext';
import { useGuidedTour } from '../hooks/useGuidedTour';
import { useMetaDescription } from '../hooks/useMetaDescription';
import { useTitle } from '../hooks/useTitle';
import { Footer } from './page-layout/Footer';
import { HambugerMenu } from './page-layout/HamburgerMenu';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
export const LandingPage: FC = () => {
  usePublicPage();
  useGuidedTour();
  useTitle('Accueil | My Web Site');
  useMetaDescription('Accueil | My Web Site');
  return (
    <>
      <HambugerMenu />

      <div
        className="bg-image"
        style={{
          backgroundImage: `url("/images/landing-page-background.jpg")`,
          height: '100vh',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center overflow-y-scroll">
            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <div className="mt-4">
              <PageTitle>Au coeur de l'écoute</PageTitle>
            </div>
            <div>
              <PageSubTitle className="fs-7">My awsome short description</PageSubTitle>
            </div>
            <OpenExternalLinkButton
              className="btn btn-outline-light fw-bolder w-75 mt-4"
              link="https://calendar.google.com/calendar/u/0/appointments/AcZssZ1eB8RwFR4X3gqAJRGBFG18VLTl87iCRz94200="
              title="Me contacter ou prendre un rendez-vous"
              analyticsEvent="rdv-ou-contact"
            >
              <div className="d-flex flex-column align-items-center">
                <span>Me contacter</span>
                <span>ou</span>
                <span>Prendre un rendez-vous</span>
              </div>
            </OpenExternalLinkButton>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

LandingPage.displayName = 'LandingPage';

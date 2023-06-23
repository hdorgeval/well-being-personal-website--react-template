import { FC } from 'react';
import { Link } from 'react-router-dom';
import { OpenExternalLink } from '../../components/OpenExternalLink';
import { useCalendar } from '../../hooks/useCalendar';
import { websiteConfig } from '../../website.config';
export const Footer: FC = () => {
  const { currentYear } = useCalendar();

  return (
    <footer className="">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex p-4 flex-row align-items-center">
          <span className="fs-1">
            <OpenExternalLink
              className="nav-link"
              link={websiteConfig.links.facebook}
              relationship="nofollow"
              aria-label="my facebook"
              title="my facebook"
              analyticsEvent="open-my-facebook"
            >
              <i className="bi bi-facebook"></i>
            </OpenExternalLink>
          </span>
          <span className="fs-1 ms-3">
            <OpenExternalLink
              className="nav-link"
              link={websiteConfig.links.whatsApp}
              relationship="nofollow"
              aria-label="my whatsapp"
              title="my whatsapp"
              analyticsEvent="open-my-whatsapp"
            >
              <i className="bi bi-whatsapp"></i>
            </OpenExternalLink>
          </span>
          <span className="fs-1 ms-3">
            <OpenExternalLink
              className="nav-link"
              link={websiteConfig.links.youtube}
              relationship="nofollow"
              aria-label="my youtube"
              title="my youtube"
              analyticsEvent="open-my-youtube"
            >
              <i className="bi bi-youtube"></i>
            </OpenExternalLink>
          </span>
          <span className="fs-1 ms-3">
            <OpenExternalLink
              className="nav-link"
              link={websiteConfig.links.instagram}
              relationship="nofollow"
              aria-label="my instagram"
              title="my instagram"
              analyticsEvent="open-my-instagram"
            >
              <i className="bi bi-instagram"></i>
            </OpenExternalLink>
          </span>
          <span className="fs-1 ms-3">
            <OpenExternalLink
              className="nav-link"
              link={`tel:${websiteConfig.phoneNumber}`}
              relationship="nofollow"
              aria-label="m'appeler par téléphone"
              title="m'appeler par téléphone"
              analyticsEvent="appel-telephone"
            >
              <i className="bi bi-telephone-outbound"></i>
            </OpenExternalLink>
          </span>
          <span className="fs-1 ms-3">
            <OpenExternalLink
              className="nav-link"
              link={`mailto:${websiteConfig.email}`}
              relationship="nofollow"
              aria-label="m'envoyer un mail"
              title="m'envoyer un mail"
              analyticsEvent="envoie-mail"
            >
              <i className="bi bi-envelope-at"></i>
            </OpenExternalLink>
          </span>
        </div>

        <span className="fs-7 fw-lighter mb-1">
          <i className="bi bi-c-circle me-2"></i>
          {`tous droits réservés ${websiteConfig.copyrightOwner} - ${currentYear}`}
        </span>
        <span className="fs-7 mb-2">
          <Link to="/mentions-legales" className="nav-link">
            <span className="">Mentions légales</span>
          </Link>
        </span>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

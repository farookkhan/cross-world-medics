import PageHeader from '../common/PageHeader';
import ExperiencePageContent from './ExperiencePageContent';

const ExperiencePage = (props) => {
  const { pageData } = props;
  const { pageHeader } = pageData;

  return (
    <div>
      <div className="top-section">
        <PageHeader
          pageHeader={pageHeader}
        />
      </div>
      <div>
        <ExperiencePageContent />
      </div>
      <style jsx>{`
        .top-section {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
}

export default ExperiencePage;
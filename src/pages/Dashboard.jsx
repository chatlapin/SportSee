import ActivityChart from '@/components/charts/ActivityChart';
import SessionsChart from '@/components/charts/SessionsChart';
import PerformanceChart from '@/components/charts/PerformanceChart';
import ScoreChart from '@/components/charts/ScoreChart';
import KeyDataCard from '@/components/charts/KeyDataCard';
import { useParams } from 'react-router';
import useFetch from '@/hooks/useFetch';

/**
 * Dashboard component that displays user's sports and health analytics
 * Fetches and displays various charts and metrics for the user
 * @returns {JSX.Element} A dashboard containing various charts and user statistics
 */
const Dashboard = () => {
  //get current id params
  const { id } = useParams();
  const { data, loading } = useFetch(id, '');

  if (loading || !data) {
    return <div>Loading...</div>;
  }
  const userData = data.data;
  return (
    <div className="p-10 max-w-[1557px] mx-auto ">
      {/* Header */}
      <div className="mb-16">
        <h1 className="mb-8 text-5xl font-medium">
          Bonjour <span className="text-red-600">{userData.userInfos.firstName}</span>
        </h1>
        <p className="text-lg">Félicitation ! Vous avez explosé vos objectifs hier 👋</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-4 gap-8">
        {/* Left Section - Charts */}
        <div className="col-span-3 space-y-8">
          {/* Activity Chart */}
          <div className="h-[320px]">
            <ActivityChart userId={id} />
          </div>

          {/* Bottom Charts Row */}
          <div className="grid grid-cols-3 gap-8 h-[263px]">
            {/* Session Duration Chart */}
            <div className="overflow-hidden bg-red-600 rounded-lg">
              <SessionsChart userId={id} />
            </div>

            {/* Performance Chart */}
            <div className="bg-[#282D30] rounded-lg overflow-hidden">
              <PerformanceChart userId={id} />
            </div>

            {/* Score Chart */}
            <div className="bg-[#FBFBFB] rounded-lg overflow-hidden">
              <ScoreChart score={userData.todayScore || userData.score} />
            </div>
          </div>
        </div>

        {/* Right Section - Key Data */}
        <div className="space-y-6">
          <KeyDataCard
            type="Calories"
            value={userData.keyData.calorieCount}
            unit="kCal"
          />
          <KeyDataCard
            type="Proteines"
            value={userData.keyData.proteinCount}
            unit="g"
          />
          <KeyDataCard
            type="Glucides"
            value={userData.keyData.carbohydrateCount}
            unit="g"
          />
          <KeyDataCard
            type="Lipides"
            value={userData.keyData.lipidCount}
            unit="g"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

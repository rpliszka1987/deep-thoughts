import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";
import ThoguthList from "../components/ThoughtList";
import ThoughtList from "../components/ThoughtList";

const Home = () => {
  // use useQuery hook here to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  console.log(thoughts);
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed fro Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

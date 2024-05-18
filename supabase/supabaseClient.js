import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);

export const getBadmintonMatches = async () => {
  const { data: matches, error } = await supabase
    .from("Badminton_matches")
    .select("*");

  if (error) {
    console.error("Error fetching badminton matches:", error);
    return []; // Or handle the error differently
  }
  return matches;
};

export const insertBadmintonMatches = async (
  team1,
  team2,
  team1Score,
  team2Score,
  creator
) => {
  try {
    const { data, error } = await supabase.from("Badminton_matches").insert({
      team1,
      team2,
      team1Score,
      team2Score,
      match_creator: creator,
    });

    if (error) {
      console.error("Error inserting badminton match:", error);
      // Handle error (e.g., return error object)
      return { data: null, error };
    }

    console.log("Match inserted successfully:", data);
    return { data, error: null }; // Or return success message
  } catch (error) {
    console.error("Unexpected error:", error);
    // Handle unexpected errors
    return { data: null, error };
  }
};

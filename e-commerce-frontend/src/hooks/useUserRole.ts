"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

const fetchUserDetails = async (email: string) => {
  if (!email) throw new Error("No email provided");

  const response = await axios.get(`${apiBaseUrl}/users/role?email=${email}`);
  return response.data;
};

export const useUserRole = (email?: string | null) => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userDetails", email],
    queryFn: () => fetchUserDetails(email!),
    enabled: !!email,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    role: user?.role,
    userId: user?._id,
    user,
    isLoading,
    isError,
    error,
  };
};

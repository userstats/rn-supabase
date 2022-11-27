import type { SupabaseClient } from "@supabase/supabase-js"
import { Platform } from "react-native"

const getClientInformation = () => {
  try {
    return JSON.stringify({
      browserName: "react-native",
      browserVersion: "unknown",
      osName: `native-${Platform.OS}`,
      osVersion: Platform.Version.toString(),
      deviceVendor: Platform.OS === "ios" ? "Apple" : "unknown",
      deviceType: "mobile",
      deviceModel: "unknown",
    })
  } catch {
    return JSON.stringify({
      browserName: "unknown",
      browserVersion: "unknown",
      osName: "unknown",
      osVersion: "unknown",
      deviceVendor: "unknown",
      deviceType: "unknown",
      deviceModel: "unknown",
    })
  }
}

export const trackActiveUser = async (supabaseClient: SupabaseClient) => {
  await supabaseClient.rpc("userstats_track_active_user", {
    client: getClientInformation(),
  })
}

// export const trackPageView = async (
//   supabaseClient: SupabaseClient,
//   path: string
// ) => {
//   await supabaseClient.rpc("userstats_track_page_view", {
//     path,
//     client: getClientInformation(),
//   })
// }

// export const withUserstatsClient = (
//   supabaseClient: SupabaseClient
// ): SupabaseClient => {
//   // Overwrite getUser to track active user without having to call it explicitly
//   const orig = supabaseClient.auth.getUser
//   supabaseClient.auth.getUser = async (jwt?: string): Promise<UserResponse> => {
//     const user = await orig.apply(supabaseClient.auth, [jwt])

//     if (user.data?.user) {
//       try {
//         await supabaseClient.rpc("userstats_track_active_user", {
//           client: getClientInformation(),
//         })
//       } catch (e) {
//         console.error(, "Could not track active user: ", e)
//       }
//     }

//     return user
//   }

//   return supabaseClient
// }

// export const trackEvent = async (
//   supabaseClient: SupabaseClient,
//   name: string,
//   properties: Record<string, any>
// ) => {
//   await supabaseClient.rpc("userstats_track_event", {
//     name,
//     properties,
//     client: getClientInformation(),
//   })
// }

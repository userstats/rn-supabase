# @userstats/rn-supabase

Minimal (react-native) client library for using userstats.io with Supabase.

# Setup

## Installation

```bash
npm install @userstats/rn-supabase
```

### Tracking active user

While Userstats can track authentication events server-side, we need to manually do a simple RPC instance to track an active user event.

To get accurate values, the `trackActiveUser` function must be called once for each route/page the user might visit.

**Basic example**

```js
// this is the already created supabaseClient
import { supabaseClient } from "./utils"

import { trackActiveUser } from "@userstats/rn-supabase"

// Somewhere in the app flow
trackActiveUser(supabaseClient)
```

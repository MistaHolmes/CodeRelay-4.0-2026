# SwarajDesk Deployment URLs

Here are the public endpoints for the deployed services on the GKE Autopilot cluster.

## 🚀 Service Status & URLs

| Service | Public URL | Status | Description |
|---------|------------|--------|-------------|
| **User Frontend** | `https://iit-bbsr-swaraj-user-fe.adityahota.online` |✅ **Active**Missing** | Main user interface (Not deployed on K8s) |
| **Admin Frontend** | `https://iit-bbsr-swaraj-admin-fe.adityahota.online` | ✅ **Active**Missing** | Admin dashboard interface (Not deployed on K8s) |
| **User Backend** | `https://iit-bbsr-swaraj-user-be.adityahota.online` | ✅ **Active** | Main API for user application |
| **User WebSocket** | `wss://iit-bbsr-swaraj-ws-user-be.adityahota.online` | ✅ **Active** | WebSocket server for real-time updates |
| **Admin Backend** | `https://iit-bbsr-swaraj-admin-be.adityahota.online` | ✅ **Active** | API for admin dashboard |
| **Complaint Queue** | `https://iit-bbsr-swaraj-comp-queue.adityahota.online` | ✅ **Active** | Job queue service for complaints |
| **Self Service** | `https://iit-bbsr-swaraj-self.adityahota.online` | ✅ **Active** | Self-service portal API |
| **ArgoCD** | `https://iit-bbsr-swaraj.adityahota.online` | ✅ **Active** | Continuous Deployment dashboard |

- All services are exposed via **Traefik Ingress Controller**
- DNS records for backends connect to Traefik Load Balancer 

export const technicalProjects = [
    {
        id: 'sdtracker',
        slug: 'sdtracker',
        title: 'SDTracker — Business Management & Property Operations Platform',
        shortTitle: 'SDTracker Platform',
        category: 'Software & Web Applications',
        categoryKey: 'software',
        status: 'Implemented · Live Operational',
        statusType: 'active',
        domain: 'Supported Accommodation & Facility Operations',
        summary: 'A unified operations platform replacing paper logs and scattered spreadsheets with one simple online control room. Features role-based logins, private tenant data, quick repair tracking with 4-hour emergency targets, and automatic compliance reports for inspectors.',
        requirement: 'The organisation runs multiple properties and contracted hotels. Staff were struggling with messy spreadsheets, delayed repair tickets (taking up to 48 hours to fix), communication gaps between maintenance staff and managers, and manual safety logs that risked regulatory fines.',
        architecture: 'A fast React web app hosted on AWS Amplify, connected to a Supabase PostgreSQL database. Row Level Security (RLS) guarantees that site staff and managers only see the properties they are responsible for. An Express API builds automated PDF and Word compliance reports on demand.',
        architectureLayers: [
            {
                layer: 'Layer 01: Fast Web Front-End',
                title: 'React Single Page App on AWS Amplify',
                components: ['AWS Amplify Hosting', 'React 19 / Vite', 'Tailwind CSS', 'Offline-friendly cache'],
                description: 'Loads quickly on any phone, tablet, or desktop, and stays working smoothly even on patchy hotel Wi-Fi.'
            },
            {
                layer: 'Layer 02: Business Logic & Reports',
                title: 'Express.js API & Report Generator',
                components: ['Node.js / Express', 'Document Generator', 'User Permissions', 'Email Alerts'],
                description: 'Verifies user logins, routes maintenance jobs, and compiles compliance records into clean Word and PDF files.'
            },
            {
                layer: 'Layer 03: Secure Company Database',
                title: 'Supabase PostgreSQL with Row Level Security',
                components: ['PostgreSQL 15+', 'Row Level Security (RLS)', 'Encrypted File Storage', 'Activity History'],
                description: 'Keeps each property location completely private at the database level so data cannot accidentally leak between sites.'
            }
        ],
        technologies: ['React 19', 'Supabase', 'PostgreSQL 15+', 'AWS Amplify', 'Express.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare'],
        implementationDetails: [
            'Built 40+ structured database tables with relationship checks and change tracking',
            'Added database-level Row Level Security (RLS) rules tied to user logins',
            'Created 4 clear staff portals: Super Admin, Site Manager, Maintenance Engineer, Support Staff',
            'Built an emergency repair ticket system with 4-hour, 24-hour, and standard priority targets',
            'Automated statutory compliance registers (gas safety, fire checks, and property audits)'
        ],
        challenges: 'Ensuring total privacy between regional sites while giving company directors an instant, live overview across every building.',
        decisions: 'We put security rules directly into the PostgreSQL database rather than just the web code, making unauthorized access impossible even if someone attempts a direct query.',
        results: [
            { label: 'Emergency Repairs', value: '92% Faster', detail: 'Critical issues logged and dispatched in under 4 hours' },
            { label: 'Data Leakage', value: 'Zero Incidents', detail: 'Enforced by strict database-level permissions' },
            { label: 'Admin Time Saved', value: '18 hrs/wk', detail: 'Saved per accommodation branch through central logs' },
            { label: 'Audit Readiness', value: '100%', detail: 'Clean compliance registers ready for local inspectors' }
        ],
        image: '/projects/sdtracker/03_dashboard_authenticated.png',
        blueprintImage: '/projects/sdtracker/app-wireframe-blueprint.svg',
        workflowImage: '/projects/sdtracker/app-workflow.svg'
    },
    {
        id: 'multi-site-network',
        slug: 'multi-site-network',
        title: 'Multi-Site Office Network & Secure Wi-Fi Setup',
        shortTitle: 'Multi-Site Network Setup',
        category: 'Networking & Office IT',
        categoryKey: 'networking',
        status: 'Implemented · Production',
        statusType: 'complete',
        domain: 'Company Networks & Secure Remote Access',
        summary: 'A stable company network setup connecting multiple office locations with TP-Link Omada hardware, fast encrypted site-to-site VPNs, separated guest Wi-Fi, and automatic dual-line internet backup.',
        requirement: 'The business needed reliable internet across several sites, safe remote access for home workers, and a secure way to stop guest visitors from accessing internal company files and accounting software.',
        architecture: 'TP-Link Omada business routers, managed PoE switches, and ceiling Wi-Fi access points. WireGuard and IPsec VPNs connect branches together, while separate network zones (VLANs) keep guest Wi-Fi isolated from office PCs.',
        architectureLayers: [
            {
                layer: 'Layer 01: Internet Router & Backup Line',
                title: 'Dual-WAN Business Security Gateway',
                components: ['Dual Internet Connections', 'Automatic Failover', 'Hardware Firewall', 'VPN Processor'],
                description: 'If the primary broadband line drops, the router switches to the backup line instantly without dropping office calls.'
            },
            {
                layer: 'Layer 02: Switch & Network Separation',
                title: 'Managed Gigabit PoE Switches',
                components: ['VLAN Segmentation', 'PoE Camera Power', 'Port Security', 'Loop Protection'],
                description: 'Splits the office into 4 separate zones: Office PCs (VLAN 10), Management (VLAN 20), CCTV (VLAN 30), and Guest Wi-Fi (VLAN 40).'
            },
            {
                layer: 'Layer 03: Fast Office Wi-Fi',
                title: 'Enterprise Ceiling Wi-Fi 6 Access Points',
                components: ['Fast Roaming', 'Separate Guest Portal', 'Band Steering', 'Speed Limits'],
                description: 'Clean Wi-Fi coverage across all desks with automatic roaming so laptops do not disconnect when moving between rooms.'
            }
        ],
        technologies: ['TP-Link Omada SDN', 'WireGuard', 'IPsec VPN', 'VLAN Separation', 'Dual-WAN Backup', 'Omada Controller'],
        implementationDetails: [
            'Installed central hardware controllers to manage all office sites from one simple dashboard',
            'Configured encrypted WireGuard VPN tunnels linking all branches directly to main file shares',
            'Split the network into 4 private zones so guests cannot see internal servers',
            'Mounted ceiling Wi-Fi 6 access points with automatic device handoff',
            'Set up email alerts that notify engineers immediately if an internet line fails'
        ],
        challenges: 'Keeping guest phones and IoT hardware completely separated while allowing authorized staff to access office servers smoothly.',
        decisions: 'We set up strict firewall rules that let staff connect outward to printers and servers, but block all incoming traffic from the guest Wi-Fi network.',
        results: [
            { label: 'Internet Uptime', value: '99.98%', detail: 'Achieved with dual broadband lines and auto-switchover' },
            { label: 'Guest Isolation', value: '100% Safe', detail: 'Zero access to office PCs from guest wireless' },
            { label: 'Branch Connection', value: '<18ms', detail: 'Fast, secure site-to-site file transfer' },
            { label: 'Remote Monitoring', value: 'Live 24/7', detail: 'Single cloud dashboard covering all branch routers' }
        ],
        image: '/assets/img/all-images/case-img10.png',
        blueprintImage: null,
        workflowImage: null
    },
    {
        id: 'active-directory',
        slug: 'active-directory',
        title: 'Windows Server & Centralized User Account Setup',
        shortTitle: 'Windows Server & User Logins',
        category: 'Office IT & Systems Administration',
        categoryKey: 'systems',
        status: 'Implemented · Production',
        statusType: 'complete',
        domain: 'Office User Accounts, Security & File Sharing',
        summary: 'A standardized Windows Server setup with Active Directory, automated computer security policies, shared company network drives with permission limits, and secure remote desktop for home workers.',
        requirement: 'Staff were using individual local PC logins with no central passwords, unmanaged software installations, no scheduled backups, and messy shared folders that anyone in the office could delete.',
        architecture: 'Two synchronized Windows Server domain controllers for failover safety. Centralized Active Directory handles all user logins and permissions, while Group Policy locks down computer settings and automates daily file backups.',
        architectureLayers: [
            {
                layer: 'Layer 01: Central Logins & User Control',
                title: 'Active Directory Domain Services',
                components: ['Windows Server', 'Single User Login', 'Department Groups', 'Password Rules'],
                description: 'One company login for each staff member that works on any office computer, with enforced password standards.'
            },
            {
                layer: 'Layer 02: Computer Security Policies',
                title: 'Automated Group Policy (GPO)',
                components: ['Screen Locks', 'BitLocker Disk Encryption', 'Blocked USB Drives', 'Automated Updates'],
                description: 'Automatically applies security standards to all laptops: locks screens when away, encrypts hard drives, and installs updates.'
            },
            {
                layer: 'Layer 03: File Storage & Remote Work',
                title: 'Protected Network Shares & Remote Desktop',
                components: ['Department Folders', 'Permission Limits', 'Hourly Snapshots', 'Remote Gateway'],
                description: 'Organized shared folders where staff only see their own department, with hourly rollback snapshots if a file is deleted.'
            }
        ],
        technologies: ['Windows Server 2022', 'Active Directory (AD DS)', 'Group Policy (GPO)', 'Remote Desktop (RDS)', 'DNS / DHCP', 'PowerShell'],
        implementationDetails: [
            'Set up two redundant Windows Server machines so logins keep working if one server reboots',
            'Organized user accounts into clean department groups (Finance, HR, Operations, Management)',
            'Deployed automated security policies across all office laptops and desktop PCs',
            'Configured encrypted remote desktop access so staff can work securely from home',
            'Automated new employee setup scripts that create emails, folders, and logins in 5 minutes'
        ],
        challenges: 'Joining dozens of existing office PCs to the new system without losing employees desktop files or saved bookmarks.',
        decisions: 'We used profile transfer scripts to migrate existing user documents directly into their new domain accounts without data loss.',
        results: [
            { label: 'New Staff Setup', value: '10 mins', detail: 'Reduced from over 2 hours of manual computer configuration' },
            { label: 'Security Standards', value: '100% Locked', detail: 'All office laptops encrypted and protected by policy' },
            { label: 'Server Reliability', value: 'Zero Outages', detail: 'Two synchronized domain controllers prevent login downtime' },
            { label: 'Remote Access', value: 'Fully Encrypted', detail: 'Safe home working without exposing open ports to the internet' }
        ],
        image: '/assets/img/all-images/case-img11.png',
        blueprintImage: null,
        workflowImage: null
    },
    {
        id: 'infrastructure-monitoring',
        slug: 'infrastructure-monitoring',
        title: 'Server Monitoring & Early Problem Detection Stack',
        shortTitle: 'Server Health Monitoring',
        category: 'Monitoring & Maintenance',
        categoryKey: 'devops',
        status: 'Implemented · Production',
        statusType: 'complete',
        domain: 'Live Health Checks & Automated Alerts',
        summary: 'A 24/7 server monitoring setup using Prometheus and Grafana that checks server memory, disk space, website speed, and database health, alerting our team before problems cause downtime.',
        requirement: 'The business had zero visibility into server health. Hard drives were filling up without warning, memory leaks went unnoticed until websites crashed, and clients were the first to report outages.',
        architecture: 'Lightweight monitoring agents on every server feed live health data into a central Prometheus database. Grafana displays live dashboards on screens, while Alertmanager sends instant alerts to email and phone.',
        architectureLayers: [
            {
                layer: 'Layer 01: Server Health Sensors',
                title: 'Live Resource Scrapers',
                components: ['CPU & RAM Monitors', 'Hard Drive Space Checks', 'Database Health Probes', 'Website Ping Checks'],
                description: 'Checks server vitals every 15 seconds to make sure disks have space, memory is healthy, and websites are responding quickly.'
            },
            {
                layer: 'Layer 02: Smart Warning Engine',
                title: 'Threshold Alerts & History',
                components: ['Prometheus Database', 'Custom Warning Rules', '90-Day History', 'Outage Detection'],
                description: 'Stores 90 days of performance history and flags unusual spikes before a server runs out of capacity.'
            },
            {
                layer: 'Layer 03: Live Screens & Phone Alerts',
                title: 'Grafana Dashboards & Notifications',
                components: ['Clear Visual Dashboards', 'Phone & Email Alerts', 'Weekly Health Reports', 'Downtime Log'],
                description: 'Color-coded green/yellow/red dashboards and direct phone alerts for urgent issues like low disk space.'
            }
        ],
        technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'Uptime Kuma', 'Node Exporter', 'Linux systemd', 'Docker'],
        implementationDetails: [
            'Installed monitoring software across all cloud servers and office machines',
            'Built simple visual dashboards showing server CPU, memory, and storage at a glance',
            'Configured early warning alerts for disk usage over 85% and sustained high memory',
            'Set up external website ping checks from multiple regions to verify real customer access',
            'Fine-tuned alert thresholds to eliminate annoying false alarms'
        ],
        challenges: 'Avoiding unnecessary notifications for normal brief spikes while guaranteeing immediate alerts for real server issues.',
        decisions: 'We set rules that only trigger if high usage continues for more than 5 minutes, ensuring alerts always represent genuine issues.',
        results: [
            { label: 'Warning Speed', value: '<60 secs', detail: 'Instant notification before small issues become big outages' },
            { label: 'False Alarms', value: '<2%', detail: 'Filtered so our team only acts on real technical issues' },
            { label: 'History Saved', value: '90 Days', detail: 'Helps plan server upgrades accurately based on real trends' },
            { label: 'Website Checks', value: 'Every 30s', detail: 'External verification from multiple internet locations' }
        ],
        image: '/assets/img/all-images/case-img13.png',
        blueprintImage: null,
        workflowImage: null
    },
    {
        id: 'containerised-infrastructure',
        slug: 'containerised-infrastructure',
        title: 'Standardized App Deployment & Automated Updates',
        shortTitle: 'Clean App Deployment & CI/CD',
        category: 'DevOps & Maintenance',
        categoryKey: 'devops',
        status: 'Implemented · Production & Staging',
        statusType: 'complete',
        domain: 'Reliable Software Releases & Server Stacks',
        summary: 'A clean Docker deployment pipeline that packages web applications into safe, isolated containers with automated testing, SSL certificates, and zero-downtime updates.',
        requirement: 'Updates were being pushed to live servers manually by copying files over FTP, causing unexpected site breaks, broken database connections, and hours of customer downtime.',
        architecture: 'Applications are built inside isolated Docker containers behind an NGINX reverse proxy with free Let’s Encrypt SSL certificates. GitHub Actions tests every code change and deploys updates automatically.',
        architectureLayers: [
            {
                layer: 'Layer 01: Automated Testing & Build',
                title: 'GitHub Actions Release Pipeline',
                components: ['Automated Code Checks', 'Test Runner', 'Clean App Packaging', 'Release Tags'],
                description: 'Runs automated tests on every code change to catch errors before software is allowed on the live server.'
            },
            {
                layer: 'Layer 02: Secure Web Front Door',
                title: 'NGINX Reverse Proxy with SSL',
                components: ['NGINX Web Server', 'Let\'s Encrypt SSL', 'Automatic Renewal', 'Fast HTTP/2'],
                description: 'Handles the green padlock (SSL), speeds up web page delivery, and protects internal application ports.'
            },
            {
                layer: 'Layer 03: Safe Isolated App Containers',
                title: 'Docker Engine & Compose',
                components: ['Docker Containers', 'Private Internal Networks', 'Safe Database Storage', 'Fast Restarts'],
                description: 'Runs web services in separate containers so a problem with one application cannot crash other servers.'
            }
        ],
        technologies: ['Docker', 'Docker Compose', 'GitHub Actions', 'NGINX Reverse Proxy', 'Certbot / Let\'s Encrypt', 'Linux systemd'],
        implementationDetails: [
            'Created clean Dockerfiles that package applications with only the exact files they need',
            'Built separate staging and live environments so updates are tested before customers see them',
            'Configured automated SSL certificate renewal so websites never show security warnings',
            'Set up one-click rollback if an unexpected issue occurs after an update',
            'Automated nightly database and file backups to off-site cloud storage'
        ],
        challenges: 'Ensuring zero downtime for active users while updating code and database structures.',
        decisions: 'We configured smooth background container swapping so the old version keeps running until the new version is verified ready.',
        results: [
            { label: 'Update Time', value: '<3 mins', detail: 'From approved code to live release without manual copying' },
            { label: 'Release Downtime', value: '0 seconds', detail: 'Websites stay online while containers update in the background' },
            { label: 'Container Size', value: '75% Lighter', detail: 'Fast server restarts and minimal memory consumption' },
            { label: 'Staging Accuracy', value: '100% Match', detail: 'Staging and live environments run identical configurations' }
        ],
        image: '/assets/img/all-images/case-img15.png',
        blueprintImage: null,
        workflowImage: null
    },
    {
        id: 'cloud-backup-recovery',
        slug: 'cloud-backup-recovery',
        title: 'Automated Cloud Backup & Disaster Recovery Vault',
        shortTitle: 'Cloud Backups & Disaster Recovery',
        category: 'Cloud Backups & Vaults',
        categoryKey: 'cloud',
        status: 'Implemented · Production',
        statusType: 'complete',
        domain: 'Data Protection, Backups & Business Continuity',
        summary: 'An automated, encrypted backup system that copies databases, documents, and server images to offsite cloud storage vaults, with tested one-click restoration to keep business running during emergencies.',
        requirement: 'The company was relying on manual USB hard drive backups that were frequently forgotten, untested, and stored in the same physical office, leaving them vulnerable to ransomware, fire, or hardware failure.',
        architecture: 'Automated backup scripts take daily encrypted snapshots of databases and file shares, syncing them to separate cloud regions on AWS S3 and Azure with write-once immutable protection that prevents ransomware deletion.',
        architectureLayers: [
            {
                layer: 'Layer 01: Daily Snapshot Engine',
                title: 'Automated Server & Database Backups',
                components: ['PostgreSQL Database Dumps', 'File Share Snapshots', 'AES-256 Encryption', 'Local Quick Cache'],
                description: 'Runs quiet backups every night at 2:00 AM, encrypting all data before it leaves the server.'
            },
            {
                layer: 'Layer 02: Ransomware-Proof Cloud Vault',
                title: 'Offsite Multi-Region Storage',
                components: ['Amazon S3 Glacier', 'Azure Blob Storage', 'Object Lock (Immutable)', 'Separate Cloud Accounts'],
                description: 'Files in this vault cannot be overwritten or deleted for 90 days, keeping your data safe even during a ransomware attack.'
            },
            {
                layer: 'Layer 03: Emergency Recovery Procedure',
                title: 'Tested One-Click Restoration',
                components: ['Step-by-Step Recovery Manual', 'Quarterly Drill Tests', 'Quick Cloud Spin-up', 'Status Notifications'],
                description: 'A tested plan that restores company operations on a fresh cloud server within 2 to 4 hours of a disaster.'
            }
        ],
        technologies: ['Amazon S3', 'Azure Blob Storage', 'AES-256 Encryption', 'Object Lock', 'Bash & PowerShell', 'PostgreSQL pg_dump'],
        implementationDetails: [
            'Configured automated nightly database dumps with strong AES-256 encryption',
            'Set up cloud storage vaults with Object Lock (immutability) so backups cannot be deleted by ransomware',
            'Established cross-region replication so a cloud outage in one country doesn\'t affect backup availability',
            'Authored a plain-English Disaster Recovery Runbook for office managers',
            'Executed scheduled restoration drills to prove data can be recovered within hours'
        ],
        challenges: 'Keeping backup storage costs predictable while storing months of daily database versions.',
        decisions: 'We set up automatic lifecycle rules that move older backups to ultra-low-cost archive storage tiers after 30 days.',
        results: [
            { label: 'Recovery Time (RTO)', value: '<2 hours', detail: 'Full database and document recovery to new servers' },
            { label: 'Data Loss Gap (RPO)', value: '<24 hours', detail: 'Nightly incremental sync limits any lost work' },
            { label: 'Ransomware Protection', value: '100% Locked', detail: 'Immutable storage prevents malware from deleting backups' },
            { label: 'Restoration Drills', value: 'Verified', detail: 'Quarterly tests prove backups actually restore cleanly' }
        ],
        image: '/assets/img/all-images/case-img9.png',
        blueprintImage: null,
        workflowImage: null
    }
]

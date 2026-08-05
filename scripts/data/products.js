const products = [
    {
        supplier: "Dell Technologies",
        category: "Laptops",
        name: "Dell XPS 15",
        description: "15-inch premium performance laptop",
        costPrice: 1650.00,
        unitPrice: 1999.99,
        quantityInStock: 18,
        unit: "pieces"
    },
    {
        supplier: "Dell Technologies",
        category: "Laptops",
        name: "Dell Latitude 5550",
        description: "Business laptop for enterprise users",
        costPrice: 980.00,
        unitPrice: 1249.99,
        quantityInStock: 30,
        unit: "pieces"
    },
    {
        supplier: "Dell Technologies",
        category: "Desktop Computers",
        name: "Dell OptiPlex 7020",
        description: "Business desktop computer",
        costPrice: 760.00,
        unitPrice: 949.99,
        quantityInStock: 20,
        unit: "pieces"
    },
    {
        supplier: "Dell Technologies",
        category: "Monitors",
        name: "Dell UltraSharp U2724D",
        description: "27-inch QHD professional monitor",
        costPrice: 420.00,
        unitPrice: 529.99,
        quantityInStock: 16,
        unit: "pieces"
    },
    {
        supplier: "HP Inc.",
        category: "Printers",
        name: "HP LaserJet Pro M404",
        description: "Monochrome laser printer",
        costPrice: 180.00,
        unitPrice: 249.99,
        quantityInStock: 22,
        unit: "pieces"
    },
    {
        supplier: "HP Inc.",
        category: "Laptops",
        name: "HP EliteBook 840 G11",
        description: "Premium business laptop",
        costPrice: 1320.00,
        unitPrice: 1599.99,
        quantityInStock: 14,
        unit: "pieces"
    },
    {
        supplier: "HP Inc.",
        category: "Desktop Computers",
        name: "HP Pro Mini 400 G9",
        description: "Compact business desktop",
        costPrice: 610.00,
        unitPrice: 789.99,
        quantityInStock: 18,
        unit: "pieces"
    },
    {
        supplier: "Lenovo Group",
        category: "Laptops",
        name: "Lenovo ThinkPad X1 Carbon",
        description: "Premium ultrabook for professionals",
        costPrice: 1450.00,
        unitPrice: 1799.99,
        quantityInStock: 15,
        unit: "pieces"
    },
    {
        supplier: "Lenovo Group",
        category: "Laptops",
        name: "Lenovo ThinkBook 16 Gen 7",
        description: "Business productivity laptop",
        costPrice: 980.00,
        unitPrice: 1249.99,
        quantityInStock: 20,
        unit: "pieces"
    },
    {
        supplier: "ASUS",
        category: "Laptops",
        name: "ASUS ZenBook 14 OLED",
        description: "Lightweight OLED ultrabook",
        costPrice: 920.00,
        unitPrice: 1199.99,
        quantityInStock: 24,
        unit: "pieces"
    },
        {
        supplier: "ASUS",
        category: "Monitors",
        name: "ASUS ProArt Display PA278QV",
        description: "27-inch professional IPS monitor",
        costPrice: 310.00,
        unitPrice: 399.99,
        quantityInStock: 12,
        unit: "pieces"
    },
    {
        supplier: "Acer",
        category: "Laptops",
        name: "Acer Aspire 5",
        description: "15.6-inch everyday productivity laptop",
        costPrice: 540.00,
        unitPrice: 699.99,
        quantityInStock: 28,
        unit: "pieces"
    },
    {
        supplier: "Acer",
        category: "Monitors",
        name: "Acer Nitro XV272U",
        description: "27-inch gaming monitor",
        costPrice: 270.00,
        unitPrice: 349.99,
        quantityInStock: 17,
        unit: "pieces"
    },
    {
        supplier: "Canon",
        category: "Printers",
        name: "Canon PIXMA G3430",
        description: "Wireless ink tank printer",
        costPrice: 210.00,
        unitPrice: 279.99,
        quantityInStock: 14,
        unit: "pieces"
    },
    {
        supplier: "Canon",
        category: "Office Equipment",
        name: "Canon imageCLASS MF455dw",
        description: "Multifunction laser printer",
        costPrice: 420.00,
        unitPrice: 549.99,
        quantityInStock: 10,
        unit: "pieces"
    },
    {
        supplier: "Epson",
        category: "Printers",
        name: "Epson EcoTank L3250",
        description: "Wireless ink tank printer",
        costPrice: 190.00,
        unitPrice: 259.99,
        quantityInStock: 20,
        unit: "pieces"
    },
    {
        supplier: "Epson",
        category: "Printers",
        name: "Epson EcoTank L6490",
        description: "Business multifunction printer",
        costPrice: 390.00,
        unitPrice: 499.99,
        quantityInStock: 11,
        unit: "pieces"
    },
    {
        supplier: "Kingston Technology",
        category: "Storage Devices",
        name: "Kingston NV3 1TB SSD",
        description: "PCIe NVMe Gen4 solid state drive",
        costPrice: 68.00,
        unitPrice: 89.99,
        quantityInStock: 45,
        unit: "pieces"
    },
    {
        supplier: "Kingston Technology",
        category: "Accessories",
        name: "Kingston DataTraveler Max 256GB",
        description: "High-speed USB flash drive",
        costPrice: 32.00,
        unitPrice: 44.99,
        quantityInStock: 50,
        unit: "pieces"
    },
    {
        supplier: "Seagate Technology",
        category: "Storage Devices",
        name: "Seagate BarraCuda 2TB",
        description: "Internal 3.5-inch hard disk drive",
        costPrice: 54.00,
        unitPrice: 74.99,
        quantityInStock: 35,
        unit: "pieces"
    },
        {
        supplier: "TP-Link",
        category: "Networking",
        name: "TP-Link Archer AX55",
        description: "Dual-band Wi-Fi 6 router",
        costPrice: 82.00,
        unitPrice: 109.99,
        quantityInStock: 25,
        unit: "pieces"
    },
    {
        supplier: "TP-Link",
        category: "Networking",
        name: "TP-Link Deco X50",
        description: "Whole-home mesh Wi-Fi 6 system",
        costPrice: 185.00,
        unitPrice: 249.99,
        quantityInStock: 14,
        unit: "pieces"
    },
    {
        supplier: "TP-Link",
        category: "Networking",
        name: "TP-Link TL-SG108",
        description: "8-port Gigabit desktop switch",
        costPrice: 28.00,
        unitPrice: 39.99,
        quantityInStock: 40,
        unit: "pieces"
    },
    {
        supplier: "TP-Link",
        category: "Networking",
        name: "TP-Link Archer TX20U Plus",
        description: "Wi-Fi 6 USB adapter",
        costPrice: 22.00,
        unitPrice: 34.99,
        quantityInStock: 32,
        unit: "pieces"
    },
    {
        supplier: "Seagate Technology",
        category: "Storage Devices",
        name: "Seagate Expansion Portable 2TB",
        description: "Portable external hard drive",
        costPrice: 70.00,
        unitPrice: 99.99,
        quantityInStock: 26,
        unit: "pieces"
    },
    {
        supplier: "Seagate Technology",
        category: "Storage Devices",
        name: "Seagate IronWolf 8TB",
        description: "NAS hard drive for business storage",
        costPrice: 185.00,
        unitPrice: 249.99,
        quantityInStock: 12,
        unit: "pieces"
    },
    {
        supplier: "Kingston Technology",
        category: "Accessories",
        name: "Kingston Fury Beast DDR5 32GB",
        description: "DDR5 desktop memory kit",
        costPrice: 98.00,
        unitPrice: 139.99,
        quantityInStock: 28,
        unit: "pieces"
    },
    {
        supplier: "Dell Technologies",
        category: "Accessories",
        name: "Dell Pro Wireless Keyboard and Mouse",
        description: "Wireless keyboard and mouse combo",
        costPrice: 38.00,
        unitPrice: 59.99,
        quantityInStock: 35,
        unit: "pieces"
    },
    {
        supplier: "HP Inc.",
        category: "Desktop Computers",
        name: "HP Elite Mini 800 G9",
        description: "Compact enterprise desktop computer",
        costPrice: 790.00,
        unitPrice: 999.99,
        quantityInStock: 13,
        unit: "pieces"
    },
    {
        supplier: "Lenovo Group",
        category: "Desktop Computers",
        name: "Lenovo ThinkCentre M90q Gen 4",
        description: "Tiny business desktop computer",
        costPrice: 720.00,
        unitPrice: 929.99,
        quantityInStock: 15,
        unit: "pieces"
    },
        {
        supplier: "Lenovo Group",
        category: "Tablets",
        name: "Lenovo Tab P12",
        description: "12.7-inch Android tablet for productivity",
        costPrice: 310.00,
        unitPrice: 399.99,
        quantityInStock: 18,
        unit: "pieces"
    },
    {
        supplier: "ASUS",
        category: "Smartphones",
        name: "ASUS ROG Phone 9",
        description: "Gaming smartphone with high-refresh display",
        costPrice: 760.00,
        unitPrice: 949.99,
        quantityInStock: 10,
        unit: "pieces"
    },
    {
        supplier: "Dell Technologies",
        category: "Laptops",
        name: "Dell Inspiron 16",
        description: "16-inch productivity laptop",
        costPrice: 890.00,
        unitPrice: 1149.99,
        quantityInStock: 21,
        unit: "pieces"
    },
    {
        supplier: "HP Inc.",
        category: "Laptops",
        name: "HP ProBook 450 G10",
        description: "Business notebook for everyday office work",
        costPrice: 810.00,
        unitPrice: 1049.99,
        quantityInStock: 19,
        unit: "pieces"
    },
    {
        supplier: "Lenovo Group",
        category: "Laptops",
        name: "Lenovo IdeaPad Slim 5",
        description: "Slim laptop for students and professionals",
        costPrice: 720.00,
        unitPrice: 929.99,
        quantityInStock: 22,
        unit: "pieces"
    },
    {
        supplier: "ASUS",
        category: "Laptops",
        name: "ASUS Vivobook 15",
        description: "Affordable everyday laptop",
        costPrice: 610.00,
        unitPrice: 789.99,
        quantityInStock: 27,
        unit: "pieces"
    },
    {
        supplier: "Dell Technologies",
        category: "Monitors",
        name: "Dell P2425H",
        description: "24-inch Full HD business monitor",
        costPrice: 180.00,
        unitPrice: 239.99,
        quantityInStock: 26,
        unit: "pieces"
    },
    {
        supplier: "HP Inc.",
        category: "Monitors",
        name: "HP E24 G5",
        description: "24-inch IPS business monitor",
        costPrice: 170.00,
        unitPrice: 229.99,
        quantityInStock: 20,
        unit: "pieces"
    },
    {
        supplier: "Canon",
        category: "Printers",
        name: "Canon MAXIFY GX4020",
        description: "Business MegaTank all-in-one printer",
        costPrice: 420.00,
        unitPrice: 549.99,
        quantityInStock: 9,
        unit: "pieces"
    },
    {
        supplier: "TP-Link",
        category: "Networking",
        name: "TP-Link Omada ER605",
        description: "Gigabit VPN router for business networks",
        costPrice: 58.00,
        unitPrice: 79.99,
        quantityInStock: 18,
        unit: "pieces"
    },
        {
        supplier: "Dell Technologies",
        category: "Desktop Computers",
        name: "Dell Precision 3680 Tower",
        description: "Professional workstation desktop",
        costPrice: 1480.00,
        unitPrice: 1849.99,
        quantityInStock: 8,
        unit: "pieces"
    },
    {
        supplier: "ASUS",
        category: "Laptops",
        name: "ASUS ROG Strix G16",
        description: "High-performance gaming laptop",
        costPrice: 1580.00,
        unitPrice: 1999.99,
        quantityInStock: 11,
        unit: "pieces"
    },
    {
        supplier: "Acer",
        category: "Laptops",
        name: "Acer Swift Go 14",
        description: "Lightweight OLED productivity laptop",
        costPrice: 870.00,
        unitPrice: 1099.99,
        quantityInStock: 16,
        unit: "pieces"
    },
    {
        supplier: "Kingston Technology",
        category: "Storage Devices",
        name: "Kingston KC3000 2TB SSD",
        description: "High-performance PCIe Gen4 NVMe SSD",
        costPrice: 155.00,
        unitPrice: 199.99,
        quantityInStock: 24,
        unit: "pieces"
    },
    {
        supplier: "Seagate Technology",
        category: "Storage Devices",
        name: "Seagate SkyHawk 4TB",
        description: "Surveillance hard drive",
        costPrice: 88.00,
        unitPrice: 119.99,
        quantityInStock: 18,
        unit: "pieces"
    },
    {
        supplier: "Dell Technologies",
        category: "Accessories",
        name: "Dell USB-C Dock WD22TB4",
        description: "Thunderbolt docking station",
        costPrice: 210.00,
        unitPrice: 279.99,
        quantityInStock: 15,
        unit: "pieces"
    },
    {
        supplier: "HP Inc.",
        category: "Office Equipment",
        name: "HP ScanJet Pro 3600",
        description: "High-speed document scanner",
        costPrice: 265.00,
        unitPrice: 349.99,
        quantityInStock: 12,
        unit: "pieces"
    },
    {
        supplier: "Canon",
        category: "Office Equipment",
        name: "Canon DR-C230",
        description: "Compact office document scanner",
        costPrice: 340.00,
        unitPrice: 449.99,
        quantityInStock: 10,
        unit: "pieces"
    },
    {
        supplier: "TP-Link",
        category: "Networking",
        name: "TP-Link TL-SX1008",
        description: "8-Port 10-Gigabit unmanaged switch",
        costPrice: 245.00,
        unitPrice: 319.99,
        quantityInStock: 9,
        unit: "pieces"
    },
    {
        supplier: "Kingston Technology",
        category: "Accessories",
        name: "Kingston Workflow Station",
        description: "High-speed multi-slot card reader hub",
        costPrice: 58.00,
        unitPrice: 79.99,
        quantityInStock: 20,
        unit: "pieces"
    }
];

export { products };
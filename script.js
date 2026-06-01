document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const AuraDatabase = {

        products: [{

                id: 101,

                sku: "AF-FW-245-LUG",

                brand: "Aura Footwear",

                title: "Iron-Forged Heritage Lug Boot",

                price: 245.00,

                status: "Bespoke Hide",

                image: "https://m.media-amazon.com/images/I/81QCw6CWGLL._AC_SR768,1024_.jpg",

                description: "Handcrafted using vegetable-tanned full-grain leather. Features a storm welt construction, heavy-duty steel shanks, and a cork midsole that molds to your unique footprint over time. Designed for the harshest agricultural environments and urban winters alike.",

                specs: ["Goodyear Welt", "Vibram Outsole", "Waxed Cotton Laces"]

            },

            {

                id: 102,

                sku: "AF-OW-185-WAX",

                brand: "Aura Outerwear",

                title: "Rancher's Waxed Canvas Field Jacket",

                price: 185.00,

                status: "Best Seller",

                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "Built from 14oz military-grade canvas and treated with natural beeswax for ultimate weather resistance. Features a corduroy-lined collar, brass snap buttons, and reinforced elbow patches. A generational piece.",

                specs: ["14oz Canvas", "Beeswax Treated", "Triple Stitched Seams"]

            },

            {

                id: 103,

                sku: "AF-DN-120-SLUB",

                brand: "Aura Denim Co.",

                title: "Selvedge Raw Slub Denim (16oz)",

                price: 120.00,

                status: "New Arrival",

                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "Woven on vintage shuttle looms in Japan, this 16oz raw denim features a slubby texture that will fade uniquely to your lifestyle. Unwashed, untreated, and ready for years of heavy wear.",

                specs: ["16oz Weight", "Redline Selvedge", "Copper Rivets"]

            },

            {

                id: 104,

                sku: "AF-SH-085-FLN",

                brand: "Aura Shirting",

                title: "Lumberjack Heavyweight Flannel",

                price: 85.00,

                status: "Seasonal",

                image: "https://www.weatherclimat.com/wp-content/uploads/2023/01/flannel-hoodie-680lui-1.jpg",

                description: "Constructed from organic long-staple cotton, double-brushed inside and out for maximum thermal retention. Features a relaxed cut designed for layering over thermal henleys during freezing morning chores.",

                specs: ["100% Organic Cotton", "Double-brushed", "Horn Buttons"]

            },

            {

                id: 105,

                sku: "AF-AC-065-BELT",

                brand: "Aura Leather Goods",

                title: "Saddlemaker's Utility Belt",

                price: 65.00,

                status: "Limited",

                image: "https://www.yoderleather.com/cdn/shop/files/IMG_3319_1000x.jpg?v=1755204560",

                description: "Cut from a single piece of 10oz harness leather. Equipped with a solid brass roller buckle forged in a local foundry. This belt will outlast the trousers you wear it with.",

                specs: ["10oz Harness Leather", "Solid Brass Buckle", "Burnished Edges"]

            },

            {

                id: 106,

                sku: "AF-OW-210-LND",

                brand: "Aura Outerwear",

                title: "Sherpa-Lined Denim Ranch Coat",

                price: 210.00,

                status: "Archive",

                image: "https://www.highcountrywesternwear.com/cdn/shop/files/f0ndcxzhchnxczghxf5c_1200x.png?v=1757605638",

                description: "A mid-century classic revived. 14oz washed denim exterior paired with a high-pile sherpa fleece interior lining. Features four exterior utility pockets and an internal security pocket.",

                specs: ["14oz Denim", "High-pile Sherpa", "Reinforced Yoke"]

            },

            {

                id: 107,

                sku: "AF-KN-145-WL",

                brand: "Aura Shirting",

                title: "Fisherman's Ribbed Wool Sweater",

                price: 145.00,

                status: "Seasonal",

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgNYU50nBwdmhqjtNNF9B6CC1_xyJ3esqhg&s",

                description: "Knit from 100% British spun wool. Features a traditional ribbed pattern originally designed to trap heat and repel moisture on the open seas. Heavyweight construction for the coldest days.",

                specs: ["100% British Wool", "Ribbed Knit", "Natural Lanolin Retained"]

            },

            {

                id: 108,

                sku: "AF-AC-045-GLV",

                brand: "Aura Leather Goods",

                title: "Deerskin Work Gloves",

                price: 45.00,

                status: "Essential",

                image: "https://www.ranchjacksonhole.com/cdn/shop/products/glove2_11d46d53-cd7c-4e18-9274-e05d2e2b2256.jpg?v=1656968301&width=888",

                description: "Supple yet incredibly durable premium deerskin leather. Unlined for maximum dexterity while handling tools, barbed wire, or timber. Naturally molds to the shape of your hands.",

                specs: ["Premium Deerskin", "Keystone Thumb", "Elastic Gathered Wrist"]

            },

            {

                id: 109,

                sku: "AF-TR-110-DKN",

                brand: "Aura Outerwear",

                title: "Double-Knee Canvas Work Pant",

                price: 110.00,

                status: "Best Seller",

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3Rl4mcdw5wcdx8I9bS1FvogwZquBJB8ajw&s",

                description: "Built from 12oz duck canvas with reinforced double-paneled knees to withstand kneeling on rough terrain. Includes a side utility pocket and a hammer loop for true field functionality.",

                specs: ["12oz Duck Canvas", "Riveted Stress Points", "Double-Knee Panels"]

            },

            {

                id: 110,

                sku: "AF-BG-220-DUF",

                brand: "Aura Accessories",

                title: "Waxed Canvas Weekender Duffel",

                price: 220.00,

                status: "Limited",

                image: "https://www.primermagazine.com/wp-content/uploads/2017/09/waxed-canvas/szone-waxed-canvas2.jpg",

                description: "Spacious duffel bag built for rugged travel. Constructed from 18oz waxed canvas with thick bridle leather handles and a solid brass zipper. Water-resistant and indestructible.",

                specs: ["18oz Waxed Canvas", "Bridle Leather Straps", "Solid Brass Hardware"]

            },

            {

                id: 111,

                sku: "AF-AC-350-WTC",

                brand: "Aura Accessories",

                title: "Expedition Automatic Field Watch",

                price: 350.00,

                status: "New Arrival",

                image: "https://www.benbridge.com/dw/image/v2/ABAW_PRD/on/demandware.static/-/Sites-bbj-master-catalog/default/dwb844c4b4/images/60003922_6.jpg?sw=800&sh=800",

                description: "A reliable mechanical timepiece requiring no batteries. Encased in brushed stainless steel with a high-contrast legible dial and luminescent hands. Strapped with vegetable-tanned leather.",

                specs: ["Automatic Movement", "Sapphire Crystal", "100m Water Resistance"]

            },

            {

                id: 112,

                sku: "AF-AC-035-CAP",

                brand: "Aura Shirting",

                title: "Merino Wool Watch Cap",

                price: 35.00,

                status: "Essential",

                image: "https://i.ebayimg.com/images/g/H08AAeSw1rlp8E5h/s-l1200.jpg",

                description: "A classic naval-style beanie knit from ultra-soft, breathable merino wool. It regulates temperature naturally, keeping you warm without overheating during strenuous labor.",

                specs: ["100% Merino Wool", "Naval Watch Style", "Odor Resistant"]

            },

            {

                id: 113,

                sku: "AF-SH-055-HNL",

                brand: "Aura Shirting",

                title: "Heavyweight Thermal Henley",

                price: 55.00,

                status: "Essential",

                image: "https://m.media-amazon.com/images/I/71hv5dITpvL._AC_SL1500_.jpg",

                description: "The ultimate base layer. Made from an 8oz waffle-knit cotton that traps body heat. Features a durable three-button placket and ribbed cuffs to keep drafts out.",

                specs: ["8oz Waffle Knit", "Three-Button Placket", "Flatlock Stitching"]

            },

            {

                id: 114,

                sku: "AF-AC-075-APR",

                brand: "Aura Denim Co.",

                title: "Craftsman's Selvedge Apron",

                price: 75.00,

                status: "Restocked",

                image: "https://www.lumberjocks.com/attachments/apron-png.3915664/",

                description: "Designed for the workshop. Made from 13oz raw selvedge denim with crossed leather back straps to relieve neck strain. Features multiple chest and lap pockets for tools and pencils.",

                specs: ["13oz Selvedge Denim", "Cross-Back Leather Straps", "Brass Rivets"]

            },

            {

                id: 115,

                sku: "AF-AC-025-BND",

                brand: "Aura Accessories",

                title: "Indigo Dyed Neckerchief",

                price: 25.00,

                status: "Essential",

                image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/1408404/2016/7/25/11469438804694-Celio-Unisex-Navy-Indigo-Dyed-Scarf-8461469438803556-1.jpg",

                description: "A versatile field accessory dyed using genuine natural indigo. Perfect for wiping sweat, shielding the neck from the sun, or filtering dust during harvest.",

                specs: ["100% Cotton", "Natural Indigo Dye", "Hand-Rolled Edges"]

            },

            {

                id: 116,

                sku: "AF-AC-022-SOK",

                brand: "Aura Footwear",

                title: "Alpaca Blend Boot Socks",

                price: 22.00,

                status: "Best Seller",

                image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "Thick, cushioned boot socks knit from a proprietary blend of alpaca wool and nylon for durability. Wick moisture instantly and prevent blisters during 12-hour shifts in the dirt.",

                specs: ["Alpaca Wool Blend", "Cushioned Footbed", "Arch Support"]

            },

            {

                id: 117,

                sku: "AF-SH-135-MOL",

                brand: "Aura Shirting",

                title: "Moleskin Utility Overshirt",

                price: 135.00,

                status: "Archive",

                image: "https://www.marinelayer.com/cdn/shop/files/F3_M_18302_Max_Moleskin_Overshirt_Taupe_35572-Final-Crop-Web.jpg?v=1757096454",

                description: "Woven from heavy cotton moleskin, this overshirt feels like chamois but wears like iron. Completely windproof and resistant to briars and underbrush. Can be worn as a shirt or a light jacket.",

                specs: ["11oz Cotton Moleskin", "Windproof Construction", "Corozo Buttons"]

            },

            {

                id: 118,

                sku: "AF-AC-085-WAL",

                brand: "Aura Leather Goods",

                title: "Cordovan Minimalist Cardholder",

                price: 85.00,

                status: "Bespoke Hide",

                image: "https://preview.redd.it/shell-cordovan-minimalist-vertical-card-wallet-dark-sky-v0-jq5ayq16mxqe1.jpg?width=640&crop=smart&auto=webp&s=2126ce653404a52ff557d059206eb0c7d3f49174",

                description: "Hand-stitched using premium shell cordovan leather known for its incredible density and luster. Features three card slots and a central pocket for folded cash. Slim enough for front-pocket carry.",

                specs: ["Shell Cordovan Leather", "Waxed Thread Stitching", "3 Card Slots"]

            },

            {

                id: 119,

                sku: "AF-OW-295-DUS",

                brand: "Aura Outerwear",

                title: "Oilskin Ranch Duster",

                price: 295.00,

                status: "Limited",

                image: "https://leaninpolearena.com/cdn/shop/products/Oil-Skin-Duster-Front-scaled.jpg?v=1635375917",

                description: "The ultimate protection against torrential rain. Cut long to protect the legs while riding or working, made from heavy oilskin canvas that repels water entirely. Features a storm cape and leg straps.",

                specs: ["Heavy Oilskin Canvas", "Detachable Storm Cape", "Saddle Gusset"]

            },

            {

                id: 120,

                sku: "AF-AC-060-BRC",

                brand: "Aura Accessories",

                title: "Heavy-Duty Leather Braces",

                price: 60.00,

                status: "Restocked",

                image: "https://i.etsystatic.com/13861879/c/914/914/19/26/il/71992a/7845673986/il_300x300.7845673986_ikqt.jpg",

                description: "Traditional button-on suspenders crafted from thick bridle leather with elastic rear webbing for mobility. Designed to keep heavy tool-laden trousers securely in place.",

                specs: ["Bridle Leather", "Button-on Attachments", "Solid Brass Sliders"]

            },

            {

                id: 121,

                sku: "AF-AC-095-KN",

                brand: "Aura Accessories",

                title: "Forged Carbon Pocket Knife",

                price: 95.00,

                status: "Essential",

                image: "https://www.yankodesign.com/images/design_news/2024/01/tekto-a3-delta-tactical-knife-with-forged-fiber-carbon-handle-exudes-power-you-can-feel/tekto_edc_everyday_carry_layout.jpg",

                description: "A dependable everyday carry tool. Features a high-carbon steel drop-point blade that holds a razor edge, paired with a tactile bone handle. Includes a brass lanyard hole.",

                specs: ["High-Carbon Steel", "Bone Handle", "Slip Joint Mechanism"]

            },

            {

                id: 122,

                sku: "AF-TR-165-OVR",

                brand: "Aura Denim Co.",

                title: "Hickory Stripe Work Overalls",

                price: 165.00,

                status: "New Arrival",

                image: "https://cdn11.bigcommerce.com/s-r4f6haoaux/images/stencil/1280x1280/products/361/3206/key-apparel-construction-005__72670.1728931319.jpg?c=1",

                description: "Classic rail-worker style overalls made from robust 11oz hickory stripe denim. Features a multi-compartment bib pocket, reinforced knees, and heavy elastic suspender straps.",

                specs: ["11oz Hickory Stripe", "Multi-Tool Bib Pocket", "Bar-tacked Seams"]

            },

            {

                id: 123,

                sku: "AF-OW-125-WST",

                brand: "Aura Outerwear",

                title: "Tweed Wool Waistcoat",

                price: 125.00,

                status: "Seasonal",

                image: "https://media.houseofbruar.com/www/images/products/small/TR40603MOORLANDHB.jpg?v=8",

                description: "A tailored mid-layer that bridges the gap between field work and town meetings. Woven from coarse Donegal tweed with a cotton-twill back lining and an adjustable cinch.",

                specs: ["Donegal Tweed", "Cotton Twill Back", "4-Pocket Front"]

            },

            {

                id: 124,

                sku: "AF-FW-260-MOC",

                brand: "Aura Footwear",

                title: "Moc-Toe Wedge Work Boot",

                price: 260.00,

                status: "Best Seller",

                image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "Built specifically for standing on hard surfaces all day. The crepe wedge sole disperses weight evenly, while the oil-tanned leather upper sheds mud and water effortlessly.",

                specs: ["Oil-Tanned Leather", "Crepe Wedge Sole", "Goodyear Welt"]

            },

            {

                id: 125,

                sku: "AF-AC-018-BLM",

                brand: "Aura Leather Goods",

                title: "Beeswax Leather Balm",

                price: 18.00,

                status: "Essential",

                image: "https://i.etsystatic.com/36020997/r/il/df2307/3986664681/il_fullxfull.3986664681_sdtt.jpg",

                description: "Our proprietary blend of natural beeswax, pine pitch, and neat's-foot oil. Rejuvenates dried-out leather boots, jackets, and belts while restoring maximum water repellency.",

                specs: ["Natural Beeswax", "Restores Leather", "Waterproofing"]

            },

            {

                id: 126,

                sku: "AF-AC-030-LAN",

                brand: "Aura Leather Goods",

                title: "Braided Leather Key Lanyard",

                price: 30.00,

                status: "New Arrival",

                image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/key-chain/j/1/t/2-pcs-black-braided-keychain-leather-strap-keyring-pu-rope-hook-original-imagh3sfqfzubvd2.jpeg?q=70",

                description: "Hand-braided from kangaroo leather for exceptional tensile strength. Secures to your belt loop via a solid brass trigger snap, keeping your keys safe and out of the mud.",

                specs: ["Kangaroo Leather", "Solid Brass Clip", "Hand-Braided"]

            },

            {

                id: 127,

                sku: "AF-SH-045-TEE",

                brand: "Aura Shirting",

                title: "Heavyweight Tubular Pocket Tee",

                price: 45.00,

                status: "Essential",

                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "Knit on antique loopwheel machines to eliminate side seams. This 8oz cotton tee is exceptionally dense, holding its shape through years of heavy washes and brutal heat.",

                specs: ["8oz Loopwheel Cotton", "No Side Seams", "Reinforced Chest Pocket"]

            },

            {

                id: 128,

                sku: "AF-AC-055-WTS",

                brand: "Aura Leather Goods",

                title: "Horween Leather NATO Strap",

                price: 55.00,

                status: "Bespoke Hide",

                image: "https://finwatchstraps.com/cdn/shop/products/bund-style-leather-watch-strap-aviator-model-horween-military-olive-127170.jpg?v=1673880596&width=1080",

                description: "A rugged upgrade for your favorite field watch. Cut from legendary Horween Chromexcel leather, designed to pass under the watch case for added security during active labor.",

                specs: ["Horween Chromexcel", "Stainless Steel Hardware", "20mm/22mm Widths"]

            },

            {

                id: 129,

                sku: "AF-OW-160-CHR",

                brand: "Aura Outerwear",

                title: "Canvas Chore Coat",

                price: 160.00,

                status: "Best Seller",

                image: "https://d1zyv7v12t3541.cloudfront.net/attached_assets/assets/000/047/707/original/25e1888071331d92d82a0ce159375588.jpg?1779126928",

                description: "The quintessential worker's garment. Unlined 12oz duck canvas with four drop-in patch pockets. Boxy fit accommodates heavy layers underneath without restricting arm movement.",

                specs: ["12oz Duck Canvas", "Donut Tack Buttons", "Bar-tacked Pockets"]

            },

            {

                id: 130,

                sku: "AF-OW-135-VST",

                brand: "Aura Outerwear",

                title: "Insulated Field Vest",

                price: 135.00,

                status: "Seasonal",

                image: "https://cdn.thewirecutter.com/wp-content/media/2024/10/insulatedvests-2048px-rei650downmensvesthero.jpg?width=2048&quality=60&crop=2048:1365&auto=webp",

                description: "Keeps your core warm while leaving your arms entirely free for swinging an axe or hauling feed. Quilted ripstop nylon exterior packed with recycled synthetic down.",

                specs: ["Ripstop Nylon Shell", "Recycled Insulation", "Fleece-lined Pockets"]

            },

            {

                id: 131,

                sku: "AF-SH-095-BND",

                brand: "Aura Shirting",

                title: "Indigo Band Collar Shirt",

                price: 95.00,

                status: "New Arrival",

                image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "Inspired by early 20th-century workwear where collars were detachable. Rope-dyed with natural indigo that will chip and fade uniquely over time. Features a slightly extended tail.",

                specs: ["Rope-Dyed Indigo", "Band Collar", "Gusseted Side Seams"]

            },

            {

                id: 132,

                sku: "AF-TR-130-CRP",

                brand: "Aura Denim Co.",

                title: "Canvas Carpenter Pant",

                price: 130.00,

                status: "Essential",

                image: "https://s.alicdn.com/@sc04/kf/H3156e571270049f48cec5dc5fc8b8cb4b/LARSUR-Custom-Denim-Manufacturer-Raw-Selvedge-Denim-Flare-Carpenter-Jeans-Men-Straight-White-Japanese-Style-Salvage-Denim-Pants.jpg_300x300.jpg",

                description: "A relaxed, straight-leg work pant featuring a traditional hammer loop and dedicated plier pockets. Sewn with heavy-duty poly-core thread to prevent seam blowouts.",

                specs: ["11oz Cotton Canvas", "Hammer Loop", "Triple-Stitched Outseam"]

            },

            {

                id: 133,

                sku: "AF-FW-275-CHL",

                brand: "Aura Footwear",

                title: "Ranchhand Chelsea Boot",

                price: 275.00,

                status: "Best Seller",

                image: "https://axelsltd.com/cdn/shop/files/stallion-boots-stillwater-zorro-in-vintage-grey-mens-cowboy-boots-axels-vail-1174246251.jpg?v=1750378120&width=1800",

                description: "A slip-on work boot built on a robust Goodyear welt. Features heavy-duty elastic gussets and twin pull-tabs for easy removal after a long day in the mud.",

                specs: ["Weatherproof Leather", "Goodyear Welt", "Heavy Elastic Gussets"]

            },

            {

                id: 134,

                sku: "AF-AC-070-RGT",

                brand: "Aura Leather Goods",

                title: "Roughout Leather Belt",

                price: 70.00,

                status: "Limited",

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwFtOTOG0U7-U0lh5qJzt7glzK6Ym5OFGKQ&s",

                description: "Using the flesh side (roughout) of the hide outwards means this belt refuses to show scuffs or scratches. Paired with a matte black forged iron buckle.",

                specs: ["9oz Roughout Leather", "Forged Iron Buckle", "Hand-Punched Holes"]

            },

            {

                id: 135,

                sku: "AF-AC-024-FSK",

                brand: "Aura Accessories",

                title: "Merino Field Socks (3-Pack)",

                price: 24.00,

                status: "Essential",

                image: "https://m.media-amazon.com/images/I/81+VKV9FCGL._AC_UY1100_.jpg",

                description: "Mid-weight merino wool socks designed for year-round temperature regulation. Reinforced at the heel and toe with nylon for incredible longevity inside heavy boots.",

                specs: ["65% Merino Wool", "Reinforced Heel/Toe", "Seamless Toe Box"]

            },

            {

                id: 136,

                sku: "AF-AC-085-TRL",

                brand: "Aura Accessories",

                title: "Waxed Canvas Tool Roll",

                price: 85.00,

                status: "Restocked",

                image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "Keep your wrenches, chisels, or knives perfectly organized. Features 12 varied-width slots and a zippered pouch for hardware. Secures tightly with a leather wrap strap.",

                specs: ["18oz Waxed Canvas", "Leather Tie Strap", "Brass Zipper Pouch"]

            },

            {

                id: 137,

                sku: "AF-SH-115-CRD",

                brand: "Aura Shirting",

                title: "Heavy Corduroy Overshirt",

                price: 115.00,

                status: "Seasonal",

                image: "https://www.jackjones.in/cdn/shop/files/901834703_g4_25a91c9b-befa-414a-9cdb-60db7c5eb9d4.jpg?v=1767330533&width=1080",

                description: "An 8-wale thick cotton corduroy that cuts the wind and provides excellent insulation. Features deep chest pockets capable of holding a field notebook or oversized phone.",

                specs: ["8-Wale Corduroy", "Oversized Fit", "Resin Buttons"]

            },

            {

                id: 138,

                sku: "AF-KN-140-HZP",

                brand: "Aura Shirting",

                title: "Merino Half-Zip Sweater",

                price: 140.00,

                status: "New Arrival",

                image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "A refined but rugged layering piece. Knit from dense, extra-fine merino wool. The heavy brass zipper allows for quick ventilation when the sun breaks through the clouds.",

                specs: ["Extra-Fine Merino", "Brass YKK Zipper", "Ribbed Cuffs"]

            },

            {

                id: 139,

                sku: "AF-AC-040-CLP",

                brand: "Aura Accessories",

                title: "Solid Gold Money Clip",

                price: 40.00,

                status: "Essential",

                image: "https://m.media-amazon.com/images/I/61NFpea-WOL._AC_UY1100_.jpg",

                description: "Die-stamped from a single sheet of heavy-gauge cartridge brass. It will develop a stunning, dark patina over time depending on the oils in your hands and the climate you live in.",

                specs: ["Cartridge Brass", "High-Tension Grip", "Develops Patina"]

            },

            {

                id: 140,

                sku: "AF-AC-065-LGL",

                brand: "Aura Leather Goods",

                title: "Fleece-Lined Work Gloves",

                price: 65.00,

                status: "Seasonal",

                image: "https://mstore.co.uk/cdn/shop/files/35778b02_2F6628f21077080b643b000035_2F1_2FSKY08_P_I_LR_SKY_Argon_1023.png?v=1765371007&width=1445",

                description: "For sub-zero mornings hauling timber or fixing fences. Thick cowhide exterior protects against abrasions, while a soft micro-fleece lining keeps frostbite at bay.",

                specs: ["Top-Grain Cowhide", "Micro-fleece Lined", "Gunn Cut Pattern"]

            },

            {

                id: 141,

                sku: "AF-OW-195-BRN",

                brand: "Aura Outerwear",

                title: "Quilted Heritage Barn Jacket",

                price: 195.00,

                status: "Best Seller",

                image: "https://imagescdn.aeo.in/img/app/product/3/39733660-21261932.jpg?auto=format&w=390",

                description: "A countryside staple. Diamond-quilted exterior sheds water and dirt, backed by a lightweight poly-fill for warmth. Features large hip pockets designed for gloves and tools.",

                specs: ["Diamond Quilted Shell", "Corduroy Trim", "Snap-button Vents"]

            },

            {

                id: 142,

                sku: "AF-BG-150-TOT",

                brand: "Aura Accessories",

                title: "Canvas Mechanic's Tote",

                price: 150.00,

                status: "Archive",

                image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

                description: "An incredibly tough, structured tote designed originally for carrying heavy wrenches and iron parts. Double-layered canvas bottom prevents tears, and heavy leather handles bear the load.",

                specs: ["24oz Heavy Canvas", "Double-Layer Bottom", "Rivet-secured Handles"]

            },

            {

                id: 143,

                sku: "AF-DN-145-BLK",

                brand: "Aura Denim Co.",

                title: "Black Selvedge Straight Fit",

                price: 145.00,

                status: "New Arrival",

                image: "https://huckberry.imgix.net/spree/products/742743/original/76608_RRL_Slim_Fit_Selvedge_Denim_Jeans_Black_on_Black_On-Fig_01.jpg?auto=format%2C%20compress&crop=faces&fit=crop&cs=tinysrgb&trim=auto&ar=4%3A5&trim-color=ffffff&trim-md=5&ixlib=react-9.8.1",

                description: "A stealthy take on our classic denim. 13oz Japanese selvedge woven with black warp and black weft yarns. Fades to a stunning charcoal grey with heavy use.",

                specs: ["13oz Black/Black Denim", "Straight Leg Fit", "Black Coated Hardware"]

            },

            {

                id: 144,

                sku: "AF-OW-350-SUD",

                brand: "Aura Outerwear",

                title: "Roughout Suede Trucker Jacket",

                price: 350.00,

                status: "Limited",

                image: "https://www.dixonrand.com/cdn/shop/files/Screenshot-20251221_203649_Instagram_2048x.jpg?v=1766421610",

                description: "A luxury workwear icon. Made from heavy steerhide roughout leather that acts as natural armor against thorns and wind. Unlined, allowing it to mold to your body over decades.",

                specs: ["Steerhide Roughout", "Unlined Construction", "Brass Snap Buttons"]

            },

            {

                id: 145,

                sku: "AF-AC-020-WAX",

                brand: "Aura Accessories",

                title: "Heavy-Duty Boot Wax",

                price: 20.00,

                status: "Essential",

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rSYgj3h2ZkwhnYa2CLGjfntga4Y51mOeXw&s",

                description: "A harder compound than our leather balm, designed specifically to seal the seams and welts of heavy work boots against snow and standing water.",

                specs: ["Carnauba & Beeswax", "Maximum Waterproofing", "2oz Tin"]

            },

            {

                id: 146,

                sku: "AF-SH-090-LIN",

                brand: "Aura Shirting",

                title: "Linen-Blend Summer Work Shirt",

                price: 90.00,

                status: "Seasonal",

                image: "https://i.pinimg.com/736x/50/49/db/5049dbe455cefac341ea3d5dfad22746.jpg",

                description: "When the heat is oppressive but protection is still required. A tough but breathable blend of French linen and organic cotton. Features dual chest pockets with button flaps.",

                specs: ["55% Linen / 45% Cotton", "Breathable Weave", "Dual Flap Pockets"]

            }

        ]

    };

    const fetchProductsAPI = () => {
        return new Promise((resolve) => setTimeout(() => resolve(AuraDatabase.products), 400));
    };

    const AppState = {
        cart: [],
        wishlist: [],
        userPincode: null,
        cartTotal: 0,
        orderHistory: [],
        guildPoints: 1450
    };

    const AuthState = {
        registeredUsers: new Set(),
        currentUser: null,
        isLoginMode: true
    };

    const DOM = {
        fabricationBanner: document.getElementById('fabrication-alert-banner'),
        closeFabricationBanner: document.getElementById('close-fabrication-banner'),
        toastWrapper: document.getElementById('toast-wrapper'),
        body: document.body,
        activePincode: document.getElementById('active-pincode'),
        authModalBtn: document.getElementById('open-login-modal-btn'),
        accountTriggerText: document.getElementById('account-trigger-text'),
        navbar: document.getElementById('sticky-navbar'),
        desktopNav: document.getElementById('desktop-nav'),
        mobileNavToggle: document.getElementById('mobile-nav-open'),
        searchWrapper: document.getElementById('search-wrapper'),
        searchInput: document.getElementById('global-search-input'),
        searchOverlay: document.getElementById('search-overlay-panel'),
        cartOpenBtn: document.getElementById('sidebar-cart-open-btn'),
        cartBadge: document.getElementById('cart-badge-count'),
        cartOverlay: document.getElementById('cart-sidebar-overlay'),
        cartSidebar: document.getElementById('shopping-cart-sidebar'),
        cartCloseBtn: document.getElementById('sidebar-cart-close-btn'),
        cartItemsWrapper: document.getElementById('cart-items-wrapper'),
        cartSubtotalVal: document.getElementById('cart-subtotal-value'),
        checkoutBtn: document.getElementById('checkout-initiate-btn'),
        catalogGrid: document.getElementById('main-catalog-grid'),
        quickViewContainer: document.getElementById('quickview-modal-container'),
        quickViewClose: document.getElementById('quickview-modal-close'),
        quickViewBody: document.getElementById('quickview-dynamic-body'),
        authModalContainer: document.getElementById('auth-modal-container'),
        authModalClose: document.getElementById('auth-modal-close'),
        checkoutModalContainer: document.getElementById('checkout-modal-container'),
        checkoutModalClose: document.getElementById('checkout-modal-close'),
        ordersModalContainer: document.getElementById('orders-modal-container'),
        ordersModalClose: document.getElementById('orders-modal-close'),
        ordersListContainer: document.getElementById('orders-list-container'),
        measurementsModalContainer: document.getElementById('measurements-modal-container'),
        measurementsModalClose: document.getElementById('measurements-modal-close'),
        measurementsForm: document.getElementById('measurements-form'),
        tierModalContainer: document.getElementById('tier-modal-container'),
        tierModalClose: document.getElementById('tier-modal-close'),
        guildPointsDisplay: document.getElementById('guild-points-display'),
        guildProgressFill: document.getElementById('guild-progress-fill'),
        navTrackOrders: document.getElementById('nav-track-orders'),
        navBespokeMeasurements: document.getElementById('nav-bespoke-measurements'),
        navGuildTier: document.getElementById('nav-guild-tier'),
        authForm: document.getElementById('auth-submission-form'),
        authTitle: document.getElementById('auth-title'),
        authModeText: document.getElementById('auth-mode-text'),
        authToggleBtn: document.getElementById('auth-toggle-btn'),
        authSubmitBtn: document.getElementById('auth-submit-btn'),
        footerForm: document.getElementById('footer-newsletter-broadcast-form'),
        paymentForm: document.getElementById('payment-processing-form'),
        checkoutItemsList: document.getElementById('checkout-items-list'),
        checkoutSubtotalDisplay: document.getElementById('checkout-subtotal-display'),
        checkoutTotalDisplay: document.getElementById('checkout-total-display'),
    };

    DOM.closeFabricationBanner.addEventListener('click', () => {
        DOM.fabricationBanner.style.display = 'none';
    });

    const dispatchToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        let icon = type === 'error' ? 'fa-circle-exclamation' : type === 'info' ? 'fa-circle-info' : 'fa-circle-check';
        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        DOM.toastWrapper.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = 'slideInToast 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards reverse';
            setTimeout(() => {
                if (DOM.toastWrapper.contains(toast)) DOM.toastWrapper.removeChild(toast);
            }, 400);
        }, 3500);
    };

    const formatCurrency = (amount) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);

    const renderCatalogMatrix = async () => {
        try {
            DOM.catalogGrid.innerHTML = '<div style="text-align: center; grid-column: 1/-1; padding: 4rem;"><i class="fa-solid fa-circle-notch fa-spin fa-2x"></i></div>';
            const products = await fetchProductsAPI();
            DOM.catalogGrid.innerHTML = '';
            products.forEach(product => {
                const badgeHTML = product.status ? `<span class="badge-status-alert">${product.status}</span>` : '';
                const card = document.createElement('div');
                card.className = 'catalog-item-card';
                card.innerHTML = `
                    <div class="item-media-container">
                        ${badgeHTML}
                        <img src="${product.image}" alt="${product.title}" loading="lazy">
                        <button class="quick-view-trigger" data-product-id="${product.id}">View Spec Sheet</button>
                    </div>
                    <div class="item-meta-data">
                        <p class="item-sub-label">${product.brand}</p>
                        <h4 class="item-main-title">${product.title}</h4>
                        <div class="item-pricing-matrix"><span class="active-price">${formatCurrency(product.price)}</span></div>
                    </div>`;
                DOM.catalogGrid.appendChild(card);
            });
            document.querySelectorAll('.quick-view-trigger').forEach(btn => btn.addEventListener('click', (e) => executeQuickViewModal(parseInt(e.target.getAttribute('data-product-id')))));
        } catch (error) {
            dispatchToast("Failed to load catalog.", "error");
        }
    };

    const executeQuickViewModal = (productId) => {
        const product = AuraDatabase.products.find(p => p.id === productId);
        if (!product) return;
        let specsHTML = '<ul style="margin-bottom: 2rem; color: #666; font-size: 0.9rem; padding-left: 1.2rem;">';
        product.specs.forEach(spec => specsHTML += `<li style="list-style-type: square; margin-bottom: 0.5rem;">${spec}</li>`);
        specsHTML += '</ul>';
        DOM.quickViewBody.innerHTML = `
            <div class="modal-gallery-pane"><img src="${product.image}" alt="${product.title}"></div>
            <div class="modal-specs-pane">
                <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; color: #888; margin-bottom: 0.5rem;">${product.brand}</p>
                <h2>${product.title}</h2>
                <div class="spec-price">${formatCurrency(product.price)}</div>
                <p class="spec-description">${product.description}</p>
                ${specsHTML}
                <button class="btn btn-filled modal-add-to-cart" data-id="${product.id}">Allocate to Bag</button>
            </div>`;
        DOM.quickViewContainer.classList.add('active');
        DOM.body.style.overflow = 'hidden';
        document.querySelector('.modal-add-to-cart').addEventListener('click', (e) => {
            DOM.quickViewContainer.classList.remove('active');
            DOM.body.style.overflow = '';
            allocateToCart(parseInt(e.target.getAttribute('data-id')));
        });
    };
    DOM.quickViewClose.addEventListener('click', () => {
        DOM.quickViewContainer.classList.remove('active');
        DOM.body.style.overflow = '';
    });
    DOM.quickViewContainer.addEventListener('click', (e) => {
        if (e.target === DOM.quickViewContainer) DOM.quickViewClose.click();
    });

    const toggleCartSidebar = () => {
        const isOpen = DOM.cartSidebar.classList.contains('open-state');
        DOM.cartSidebar.classList.toggle('open-state', !isOpen);
        DOM.cartOverlay.classList.toggle('active', !isOpen);
        DOM.body.style.overflow = isOpen ? '' : 'hidden';
    };
    DOM.cartOpenBtn.addEventListener('click', toggleCartSidebar);
    DOM.cartCloseBtn.addEventListener('click', toggleCartSidebar);
    DOM.cartOverlay.addEventListener('click', toggleCartSidebar);

    const allocateToCart = (productId) => {
        const product = AuraDatabase.products.find(p => p.id === productId);
        const existingNode = AppState.cart.find(item => item.id === productId);
        if (existingNode) existingNode.quantity += 1;
        else AppState.cart.push({
            ...product,
            quantity: 1
        });
        refreshCartVirtualDOM();
        dispatchToast(`Allocation Approved: ${product.title}`);
        if (!DOM.cartSidebar.classList.contains('open-state')) toggleCartSidebar();
    };

    const mutateCartQuantity = (productId, delta) => {
        const index = AppState.cart.findIndex(item => item.id === productId);
        if (index > -1) {
            AppState.cart[index].quantity += delta;
            if (AppState.cart[index].quantity <= 0) AppState.cart.splice(index, 1);
            refreshCartVirtualDOM();
        }
    };

    const destroyCartNode = (productId) => {
        AppState.cart = AppState.cart.filter(item => item.id !== productId);
        refreshCartVirtualDOM();
    };

    const refreshCartVirtualDOM = () => {
        const totalItems = AppState.cart.reduce((acc, item) => acc + item.quantity, 0);
        AppState.cartTotal = AppState.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        DOM.cartBadge.innerText = totalItems;
        DOM.cartSubtotalVal.innerText = formatCurrency(AppState.cartTotal);

        if (AppState.cart.length === 0) {
            DOM.cartItemsWrapper.innerHTML = `<div class="empty-state-notice"><i class="fa-solid fa-scroll"></i><p>No provisions or garments selected for allocation yet.</p></div>`;
            return;
        }

        DOM.cartItemsWrapper.innerHTML = '';
        AppState.cart.forEach(item => {
            const node = document.createElement('div');
            node.className = 'cart-list-item';
            node.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h5 class="cart-item-title">${item.title}</h5>
                    <div class="cart-item-price">${formatCurrency(item.price)}</div>
                    <div class="cart-qty-mutator">
                        <button class="qty-btn-minus" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn-plus" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button class="btn-remove-item" data-id="${item.id}">Remove Element</button>
                </div>`;
            DOM.cartItemsWrapper.appendChild(node);
        });

        document.querySelectorAll('.qty-btn-minus').forEach(btn => btn.addEventListener('click', (e) => mutateCartQuantity(parseInt(e.currentTarget.dataset.id), -1)));
        document.querySelectorAll('.qty-btn-plus').forEach(btn => btn.addEventListener('click', (e) => mutateCartQuantity(parseInt(e.currentTarget.dataset.id), 1)));
        document.querySelectorAll('.btn-remove-item').forEach(btn => btn.addEventListener('click', (e) => destroyCartNode(parseInt(e.target.dataset.id))));
    };

    const updateNavAuthUI = (isLoggedIn) => {
        if (isLoggedIn) {
            DOM.accountTriggerText.innerHTML = `<i class="fa-regular fa-user"></i> Logout`;
            DOM.authModalBtn.style.display = 'none';
        } else {
            DOM.accountTriggerText.innerHTML = `<i class="fa-regular fa-user"></i> Identity / Log In`;
            DOM.authModalBtn.style.display = 'block';
            DOM.authModalBtn.innerText = "Log In / Register";
        }
    };

    DOM.accountTriggerText.addEventListener('click', () => {
        if (AuthState.currentUser) {
            AuthState.currentUser = null;
            dispatchToast("Session terminated securely.", "info");
            updateNavAuthUI(false);
        }
    });

    const openAuthModal = () => {
        if (AuthState.currentUser) return;
        DOM.authModalContainer.classList.add('active');
        DOM.body.style.overflow = 'hidden';
    };

    const closeAuthModal = () => {
        DOM.authModalContainer.classList.remove('active');
        DOM.body.style.overflow = '';
    };

    DOM.authModalBtn.addEventListener('click', openAuthModal);
    DOM.authModalClose.addEventListener('click', closeAuthModal);
    DOM.authModalContainer.addEventListener('click', (e) => {
        if (e.target === DOM.authModalContainer) closeAuthModal();
    });

    DOM.authToggleBtn.addEventListener('click', () => {
        AuthState.isLoginMode = !AuthState.isLoginMode;
        if (AuthState.isLoginMode) {
            DOM.authTitle.innerText = "Access the Aura Archive";
            DOM.authModeText.innerText = "Provide credentials to initialize session.";
            DOM.authSubmitBtn.innerText = "Request Archive Initialization";
            DOM.authToggleBtn.innerText = "Need an account? Register here.";
        } else {
            DOM.authTitle.innerText = "Join the Aura Archive";
            DOM.authModeText.innerText = "Register your identity.";
            DOM.authSubmitBtn.innerText = "Register Credential";
            DOM.authToggleBtn.innerText = "Already registered? Login here.";
        }
    });

    DOM.authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email-field').value;
        if (!AuthState.isLoginMode) {
            AuthState.registeredUsers.add(email);
            dispatchToast("Registration successful! You may now login.");
            AuthState.isLoginMode = true;
            DOM.authToggleBtn.click();
        } else {
            if (AuthState.registeredUsers.has(email)) {
                AuthState.currentUser = email;
                closeAuthModal();
                dispatchToast(`Identity Verified. Welcome back, ${email}`);
                updateNavAuthUI(true);
                DOM.authForm.reset();
            } else {
                dispatchToast("Credential not found. Please register first.", "error");
            }
        }
    });

    DOM.checkoutBtn.addEventListener('click', () => {
        if (AppState.cart.length === 0) {
            dispatchToast("Your bag is empty. Please select provisions first.", "error");
            return;
        }
        if (!AuthState.currentUser) {
            dispatchToast("Authentication required to access settlement portal.", "error");
            if (DOM.cartSidebar.classList.contains('open-state')) toggleCartSidebar();
            setTimeout(openAuthModal, 500);
            return;
        }

        DOM.checkoutItemsList.innerHTML = '';
        AppState.cart.forEach(item => {
            DOM.checkoutItemsList.innerHTML += `
                <div class="checkout-item-mini">
                    <div class="checkout-item-mini-info">
                        <span class="checkout-item-mini-title">${item.title}</span>
                        <span class="checkout-item-mini-qty">Qty: ${item.quantity}</span>
                    </div>
                    <span class="checkout-item-mini-price">${formatCurrency(item.price * item.quantity)}</span>
                </div>`;
        });

        const cartTotalString = formatCurrency(AppState.cartTotal);
        DOM.checkoutSubtotalDisplay.innerText = cartTotalString;
        DOM.checkoutTotalDisplay.innerText = cartTotalString;
        if (DOM.cartSidebar.classList.contains('open-state')) toggleCartSidebar();
        DOM.checkoutModalContainer.classList.add('active');
        DOM.body.style.overflow = 'hidden';
    });

    DOM.checkoutModalClose.addEventListener('click', () => {
        DOM.checkoutModalContainer.classList.remove('active');
        DOM.body.style.overflow = '';
    });
    DOM.checkoutModalContainer.addEventListener('click', (e) => {
        if (e.target === DOM.checkoutModalContainer) DOM.checkoutModalClose.click();
    });

    DOM.paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = DOM.paymentForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Processing Transaction...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        setTimeout(() => {
            const orderNumber = "AF" + Math.floor(Math.random() * 90000 + 10000);
            const today = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            AppState.orderHistory.unshift({
                id: orderNumber,
                date: today,
                items: AppState.cart.reduce((acc, item) => acc + item.quantity, 0),
                total: formatCurrency(AppState.cartTotal),
                status: 'Processing'
            });

            AppState.guildPoints += Math.floor(AppState.cartTotal);
            AppState.cart = [];
            refreshCartVirtualDOM();
            DOM.checkoutModalClose.click();
            DOM.paymentForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            dispatchToast(`Settlement successful! Order ${orderNumber} is being allocated.`, "success");
        }, 1800);
    });

    const requireAuth = (callback) => {
        if (!AuthState.currentUser) {
            dispatchToast("Authentication required to access this portal.", "error");
            openAuthModal();
        } else {
            callback();
        }
    };

    DOM.navTrackOrders.addEventListener('click', (e) => {
        e.preventDefault();
        requireAuth(() => {
            DOM.ordersListContainer.innerHTML = '';
            if (AppState.orderHistory.length === 0) {
                DOM.ordersListContainer.innerHTML = '<p style="color: #666; font-size: 0.9rem;">No historical allocation records found.</p>';
            } else {
                AppState.orderHistory.forEach(order => {
                    DOM.ordersListContainer.innerHTML += `
                        <div class="order-card">
                            <div class="order-header-row">
                                <span class="order-id">${order.id}</span>
                                <span class="order-date">${order.date}</span>
                            </div>
                            <div class="order-status">${order.status}</div>
                            <div class="order-total">${order.items} Items | ${order.total}</div>
                        </div>`;
                });
            }
            DOM.ordersModalContainer.classList.add('active');
            DOM.body.style.overflow = 'hidden';
        });
    });

    DOM.ordersModalClose.addEventListener('click', () => {
        DOM.ordersModalContainer.classList.remove('active');
        DOM.body.style.overflow = '';
    });
    DOM.ordersModalContainer.addEventListener('click', (e) => {
        if (e.target === DOM.ordersModalContainer) DOM.ordersModalClose.click();
    });

    DOM.navBespokeMeasurements.addEventListener('click', (e) => {
        e.preventDefault();
        requireAuth(() => {
            DOM.measurementsModalContainer.classList.add('active');
            DOM.body.style.overflow = 'hidden';
        });
    });

    DOM.measurementsModalClose.addEventListener('click', () => {
        DOM.measurementsModalContainer.classList.remove('active');
        DOM.body.style.overflow = '';
    });
    DOM.measurementsModalContainer.addEventListener('click', (e) => {
        if (e.target === DOM.measurementsModalContainer) DOM.measurementsModalClose.click();
    });

    DOM.measurementsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        dispatchToast("Bespoke dimensional blueprint saved securely.", "success");
        DOM.measurementsModalClose.click();
    });

    DOM.navGuildTier.addEventListener('click', (e) => {
        e.preventDefault();
        requireAuth(() => {
            DOM.guildPointsDisplay.innerText = AppState.guildPoints.toLocaleString();
            const target = 2000;
            let percentage = (AppState.guildPoints / target) * 100;
            if (percentage > 100) percentage = 100;
            DOM.guildProgressFill.style.width = `${percentage}%`;
            DOM.tierModalContainer.classList.add('active');
            DOM.body.style.overflow = 'hidden';
        });
    });

    DOM.tierModalClose.addEventListener('click', () => {
        DOM.tierModalContainer.classList.remove('active');
        DOM.body.style.overflow = '';
    });
    DOM.tierModalContainer.addEventListener('click', (e) => {
        if (e.target === DOM.tierModalContainer) DOM.tierModalClose.click();
    });

    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 120) {
            if (currentScrollY > lastScrollY) {
                DOM.navbar.classList.remove('scrolled-up');
                DOM.navbar.classList.add('scrolled-down');
            } else {
                DOM.navbar.classList.remove('scrolled-down');
                DOM.navbar.classList.add('scrolled-up');
            }
        } else {
            DOM.navbar.classList.remove('scrolled-up', 'scrolled-down');
        }
        lastScrollY = currentScrollY;
    }, {
        passive: true
    });

    DOM.searchInput.addEventListener('focus', () => DOM.searchOverlay.classList.add('active'));
    document.addEventListener('click', (e) => {
        if (!DOM.searchWrapper.contains(e.target) && !DOM.searchOverlay.contains(e.target)) {
            DOM.searchOverlay.classList.remove('active');
        }
    });

    DOM.mobileNavToggle.addEventListener('click', () => DOM.desktopNav.classList.toggle('active'));
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({
                        behavior: 'smooth'
                    });
                    DOM.desktopNav.classList.remove('active');
                }
            }
        });
    });

    DOM.footerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailTarget = document.getElementById('footer-broadcast-email-target').value;
        if (emailTarget) {
            dispatchToast(`Directive target registered: ${emailTarget}`);
            DOM.footerForm.reset();
        }
    });

    document.getElementById('hero-cta-primary').addEventListener('click', () => document.querySelector('.product-matrix-viewport').scrollIntoView({
        behavior: 'smooth'
    }));
    document.getElementById('hero-cta-secondary').addEventListener('click', () => dispatchToast("Leather Provisions Archive Loading...", "info"));

    renderCatalogMatrix();
    refreshCartVirtualDOM();
});
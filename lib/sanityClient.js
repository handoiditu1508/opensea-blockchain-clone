import sanityClient from "@sanity/client";

const client = sanityClient({
	projectId: "0nqhdgit",
	dataset: "production",
	apiVersion: "2021-03-25",
	token: "sk2X4V8ozkB7IJTbS14Tk3makNFTaJ2Vu068cjcR4e8Jc1KP3em8dZZYfwULATPc0TAkzbZoQjeuILDJdjSbvhbx168R49r52wOQhjzM2Hg88KEwYgRvQS5xfnlq70ZRpppKMIWS640Z5G6NOJaMM1EcNWaaPA3RmTW2FA5Y0we34LsuW8s9",
	useCdn: false
})

export default client;
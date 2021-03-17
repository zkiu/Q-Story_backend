// ! no longer required as the cards collection schema is removed

// module.exports = deleteCollection

// // from firestore docs -> need to delete the doc's subcollection before deleting the doc
// // https://firebase.google.com/docs/firestore/manage-data/delete-data#collections
// async function deleteCollection(db, collectionPath, batchSize) {
// 	const collectionRef = db.collection(collectionPath)
// 	const query = collectionRef.orderBy('__name__').limit(batchSize)

// 	return new Promise((resolve, reject) => {
// 		deleteQueryBatch(db, query, resolve).catch(reject)
// 	})
// }

// async function deleteQueryBatch(db, query, resolve) {
// 	const snapshot = await query.get()

// 	const batchSize = snapshot.size
// 	if (batchSize === 0) {
// 		// When there are no documents left, we are done
// 		resolve()
// 		return
// 	}

// 	// Delete documents in a batch
// 	const batch = db.batch()
// 	snapshot.docs.forEach((doc) => {
// 		batch.delete(doc.ref)
// 	})
// 	await batch.commit()

// 	// Recurse on the next process tick, to avoid
// 	// exploding the stack.
// 	process.nextTick(() => {
// 		deleteQueryBatch(db, query, resolve)
// 	})
// }

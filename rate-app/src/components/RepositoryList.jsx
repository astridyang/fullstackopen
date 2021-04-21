import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-dom";
import { Provider, Menu, Button, Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  header: {
    padding: 10,
  },
  menu: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  searchbar: {
    marginBottom: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SortHeader = ({ setOrderOpt, setDir, setSearchQuery }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  // todo
  const onChangeSearch = (query) => setInputValue(query);
  const onBlur = (inputValue) => setSearchQuery(inputValue);
  return (
    <View style={styles.header}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={inputValue}
        style={styles.searchbar}
      />
      <Button onPress={() => onBlur(inputValue)}>Search</Button>
      <View style={styles.menu}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Latest repositories</Button>}
        >
          <Menu.Item
            onPress={() => {
              setOrderOpt("CREATED_AT");
              setDir("DESC");
            }}
            title="Latest"
          />
          <Menu.Item
            onPress={() => {
              setOrderOpt("RATING_AVERAGE");
              setDir("DESC");
            }}
            title="Highest rated"
          />
          <Menu.Item
            onPress={() => {
              setOrderOpt("RATING_AVERAGE");
              setDir("ASC");
            }}
            title="lowest rated"
          />
        </Menu>
      </View>
    </View>
  );
};
export const RepositoryListContainer = ({
  repositories,
  onEndReach,
  setOrderOpt,
  setDir,
  setSearchQuery,
  value,
  fetchMore,
}) => {
  let history = useHistory();
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  const viewDetail = (id) => {
    history.push(`/repository/${id}`);
  };
  return (
    <Provider>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Pressable onPress={() => viewDetail(item.id)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
        ListHeaderComponent={() => (
          <SortHeader
            setDir={setDir}
            setOrderOpt={setOrderOpt}
            setSearchQuery={setSearchQuery}
            value={value}
          />
        )}
      />
      {/* <Button onPress={() => fetchMore()}>Load more</Button> */}
    </Provider>
  );
};
// export class RepositoryListContainer2 extends React.Component {
//   repositoryNodes = this.props.repositories
//     ? repositories.edges.map((edge) => edge.node)
//     : [];
//   renderHeader = () => {
//     // this.props contains the component's props
//     const [searchQuery, setSearchQuery] = useState("");
//     const [value] = useDebounce(searchQuery, 500);
//     const props = this.props;
//     console.log("props: ", props);
//     const onChangeSearch = (query) => setSearchQuery(query);
//     // ...
//     return (
//       <View style={styles.header}>
//         <Searchbar
//           placeholder="Search"
//           onChangeText={onChangeSearch}
//           value={value}
//         />
//       </View>
//     );
//   };
//   viewDetail = (id) => {
//     // history.push(`/repository/${id}`);
//   };
//   render() {
//     return (
//       <FlatList
//         data={this.repositoryNodes}
//         ItemSeparatorComponent={ItemSeparator}
//         renderItem={({ item }) => (
//           <Pressable onPress={() => this.viewDetail(item.id)}>
//             <RepositoryItem item={item} />
//           </Pressable>
//         )}
//         ListHeaderComponent={this.renderHeader}
//       />
//     );
//   }
// }
const RepositoryList = () => {
  // const { data, error, loading } = useQuery(GET_REPOSITORIES, {
  //   fetchPolicy: "cache-and-network",
  // });
  const [orderOpt, setOrderOpt] = useState("CREATED_AT");
  const [dir, setDir] = useState("DESC");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCanLoadMore, setIsCanLoadMore] = useState(true);
  const [value] = useDebounce(searchQuery, 500);

  const { repositories, fetchMore, loading } = useRepositories({
    first: 8,
    orderBy: orderOpt,
    orderDirection: dir,
    searchKeyword: value,
  });
  const onEndReach = () => {
    console.log("You have reached the end of the list");
    fetchMore();
  };

  // if (loading) {
  //   return <Text>loading...</Text>;
  // }
  // fetchMore();
  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderOpt={setOrderOpt}
      
      setDir={setDir}
      onEndReach={onEndReach}
      setSearchQuery={setSearchQuery}
      fetchMore={fetchMore}
    />
    // <RepositoryListContainer2
    //   repositories={data.repositories}
    //   setOrderOpt={setOrderOpt}
    //   setDir={setDir}
    //   setSearchQuery={setSearchQuery}
    //   value={value}
    // />
  );
};

export default RepositoryList;

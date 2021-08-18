import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS } from "../../styles/base";

export default function PopupFormOk({ isVisible, title, subtext, onConfirm }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onConfirm}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <Text style={styles.subtext}>{subtext} </Text>

          <TouchableOpacity style={styles.btnCancel} onPress={onConfirm}>
            <Text style={styles.textButton}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  btnCancel: {
    marginTop: 20,
    fontFamily: FONTS.primary.regular,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: 4,
    width: 150,
    paddingTop: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 35,
  },
  modalText: {
    textAlign: "center",
    fontFamily: FONTS.primary.bold,
    color: COLORS.highlight,
    fontSize: FONTS.xd,
    lineHeight: 23,
    letterSpacing: 0.54,
    textTransform: "uppercase",
    paddingTop: 20,
    paddingBottom: 15,
  },
  subtext: {
    textAlign: "center",
    fontFamily: FONTS.primary.medium,
    color: COLORS.black,
    fontSize: FONTS.sm,
    lineHeight: 24,
    letterSpacing: 0.42,
    paddingBottom: 20,
  },
  textButton: {
    fontSize: FONTS.sm,
    fontFamily: FONTS.primary.regular,
    color: COLORS.white,
    alignSelf: "center",
  },
});
